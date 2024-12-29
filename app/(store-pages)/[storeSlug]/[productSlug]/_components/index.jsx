"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { object, string } from "yup";
import storeFooterLogo from "@/public/assets/img/store-footer-logo.svg";

import { ArrowLeft, ChevronLeft } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { extractYouTubeId, percentage, rgbaDataURL } from "@/lib/utils";

import CustomerInfo from "./customer-info";
import SlotPicker from "./slot-picker";
import SelectedSlotCard from "./seleted-slot-card";
import HandelCoupon from "./handel-coupon";

import moment from "moment";
import { useGetProductDetailsQuery } from "@/redux/api/productApi";
import Loader from "@/components/global/loader/loader";
import { useGetProductCalendarQuery } from "@/redux/api/scheduleApi";

const generateInitialValues = (formFields) => {
  const initialValues = {};

  formFields.forEach((field) => {
    const lowerCaseName = field.name.toLowerCase();
    initialValues[lowerCaseName] = "";
  });

  return initialValues;
};

const generateValidationSchema = (formFields) => {
  const validators = {};

  formFields.forEach((field) => {
    if (field.is_required) {
      const lowerCaseName = field.name.toLowerCase();
      validators[lowerCaseName] = string().required(
        `${field.name} is required`,
      );
    }
  });

  const validationSchema = object({
    ...validators,
  });

  return validationSchema;
};

export default function ProductDetails({ productSlug, storeSlug, fields }) {
  const [dateAndSlotContent, setDateAndSlotContent] = useState("CALENDER");
  const [appliedCoupon, setAppliedCoupon] = useState("");

  const { data: productData, isLoading: isProductDataLoading } =
    useGetProductDetailsQuery({
      storeSlug,
      productSlug,
    });

  const { data: calendarData, isLoading: isCalenderDataLoading } =
    useGetProductCalendarQuery({
      productSlug,
    });

  const formik = useFormik({
    initialValues: {
      ...generateInitialValues(fields),
      picked_slot: "",
      picked_slot_end: "",
      picked_date: new Date(),
      picked_meridiem: "",
    },
    validationSchema: generateValidationSchema(fields),
    onSubmit: (values) => {
      const product = productData?.data?.productDetails;
      const staticFields = fields
        .slice(0, 3)
        .map((field) => field.name.toLowerCase());

      const dynamicFields = fields.slice(3).map((field) => field.name);

      const staticFieldsValues = staticFields.map((field) => ({
        name: field,
        value: values[field],
      }));

      console.log(staticFieldsValues);

      const dynamicFieldsValues = dynamicFields.map((field) => ({
        name: field,
        value: values[field.toLowerCase()],
      }));

      const payload = {
        [staticFields[0]]: values[staticFields[0]],
        [staticFields[1]]: values[staticFields[1]],
        [staticFields[2]]: values[staticFields[2]],
        date: moment(values.picked_date).format("YYYY-MM-DD"),
        start_at: values.picked_slot,
        end_at: values.picked_slot_end,
        type: product?.platform,
        product_id: product?.id,
        applied_coupon: appliedCoupon,
        dynamic_fields: dynamicFieldsValues,
      };

      console.log(payload);
    },
  });

  if (isProductDataLoading || isCalenderDataLoading) {
    return <Loader />;
  }

  const product = productData?.data?.productDetails;
  const visitor_timezone = productData?.data?.visitor_timezone;

  const calenders = calendarData?.data?.calendar;

  // Display product price logic
  const acutalPrice = parseFloat(product?.discount_price)
    ? parseFloat(product?.discount_price).toFixed(2)
    : !parseFloat(product?.discount_price) && parseFloat(product?.price)
      ? parseFloat(product?.price).toFixed(2)
      : "Free";

  const hasDiscount = parseFloat(product?.discount_price) ? true : false;

  const enabledDates = calenders.map((date) => date.date);

  const isDayDisabled = (date) => {
    const formattedDate = moment(date).format("YYYY-MM-DD");
    return !enabledDates.includes(formattedDate);
  };

  let currentDateSlowView;

  switch (dateAndSlotContent) {
    case "CALENDER":
      currentDateSlowView = (
        <Calendar
          mode="single"
          onSelect={(date) => {
            formik.setFieldValue("picked_date", date);
            setDateAndSlotContent("SLOT");
          }}
          selected={formik.values.picked_date}
          disabled={(date) => isDayDisabled(date)}
        />
      );
      break;
    case "SLOT":
      currentDateSlowView = (
        <SlotPicker
          picked_slot={formik.values.picked_slot}
          onSlotChange={formik.setFieldValue}
          setDateAndSlotContent={setDateAndSlotContent}
          selectedDate={formik.values.picked_date}
          productSlug={productSlug}
        />
      );
      break;
    case "RESULT":
      currentDateSlowView = (
        <SelectedSlotCard
          handleChangeDate={setDateAndSlotContent.bind(null, "CALENDER")}
          selectedDate={formik.values.picked_date}
          slotStartTime={formik.values.picked_slot}
          slotEndTime={formik.values.picked_slot_end}
          selectedMeridiem={formik.values.picked_meridiem}
        />
      );
      break;
  }

  const applidCouponDiscountPercentage =
    parseInt(
      product?.coupons?.find((coupon) => coupon.code === appliedCoupon)
        ?.discount,
    ) || 0;

  return (
    <>
      <div>
        <div className="relative">
          {product?.header_image && (
            <Image
              src={product.header_image}
              alt={product?.title || "Product Image"}
              className="rounded-bl-lg rounded-br-lg"
              width={375}
              height={215}
              loading="lazy"
              quality={100}
              placeholder="blur"
              blurDataURL={rgbaDataURL(216, 228, 233)}
            />
          )}

          <Link
            href={`/${storeSlug}`}
            className="absolute left-2 top-2 flex size-8 cursor-pointer items-center justify-center rounded-full bg-white bg-opacity-50"
          >
            <ArrowLeft size={16} className="text-para" />
          </Link>
        </div>

        <div className="pb-4 pt-6">
          <p className="text-xs text-para">Price</p>
          <div className="flex items-center gap-[6px]">
            <h3 className="text-2xl font-semibold text-fl-border">
              {acutalPrice === "Free"
                ? "Free"
                : `${product?.currency} ${acutalPrice}`}
            </h3>
            {hasDiscount && (
              <p className="text-xs text-para line-through">
                {product.currency} {parseFloat(product?.price).toFixed(2)}
              </p>
            )}
          </div>
        </div>

        <hr className="h-[2px] bg-black/5" />

        <div className="py-6">
          <div
            className="prose prose-sm !p-0 text-xs text-para"
            dangerouslySetInnerHTML={{
              __html: product?.description,
            }}
          />
        </div>
        {product?.promo_video &&
          extractYouTubeId(product?.promo_video) !== "" && (
            <div className="pb-6">
              <iframe
                height={215}
                width={"100%"}
                title="promo-video"
                src={`https://www.youtube.com/embed/${extractYouTubeId(product?.promo_video)}`}
                allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope"
                allowFullScreen
              />
            </div>
          )}

        <hr className="h-[2px] bg-black/5" />

        <div className="space-y-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[2px]">
              {(dateAndSlotContent === "SLOT" ||
                dateAndSlotContent === "RESULT") && (
                <ChevronLeft
                  size={16}
                  className="cursor-pointer"
                  onClick={() => {
                    if (dateAndSlotContent === "SLOT") {
                      setDateAndSlotContent("CALENDER");
                    } else if (dateAndSlotContent === "RESULT") {
                      setDateAndSlotContent("SLOT");
                    }
                  }}
                />
              )}

              <h3 className="text-sm font-semibold text-fl-border">
                {dateAndSlotContent === "SLOT" ||
                dateAndSlotContent === "RESULT" ? (
                  <span>
                    {dateAndSlotContent === "SLOT" ? (
                      <>{moment(formik.values.picked_date).format("MMM DD")}</>
                    ) : (
                      <>Selected Slot</>
                    )}
                  </span>
                ) : (
                  product?.bottom_title
                )}
              </h3>
            </div>
            <p className="text-xs text-para">{visitor_timezone}</p>
          </div>

          <div className="rounded-lg bg-white">{currentDateSlowView}</div>
        </div>

        <hr className="h-[2px] bg-black/5" />

        <CustomerInfo formik={formik} fields={fields} />

        <hr className="h-[2px] bg-black/5" />

        <HandelCoupon
          product={product}
          appliedCoupon={appliedCoupon}
          setAppliedCoupon={setAppliedCoupon}
        />

        <div className="flex items-center justify-between pt-6">
          <p className="text-sm text-para">Total:</p>
          <h4 className="text-xl font-semibold text-fl-border">
            {acutalPrice === "Free"
              ? "Free"
              : `${product.currency} ${
                  appliedCoupon
                    ? (
                        acutalPrice -
                        percentage(applidCouponDiscountPercentage, acutalPrice)
                      ).toFixed(2)
                    : acutalPrice
                }`}
          </h4>
        </div>

        <Button
          className="mt-6 w-full"
          type="submit"
          variant={"primaryDefault"}
          onClick={formik.handleSubmit}
        >
          {product.bottom_button_text}
        </Button>
      </div>
      <footer className="my-6 flex items-center justify-center gap-[7px]">
        <p className="pl-4 text-xs font-medium text-para">Powered by</p>
        <Image src={storeFooterLogo} alt="store footer logo" />
      </footer>
    </>
  );
}
