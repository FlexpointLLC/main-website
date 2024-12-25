"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useFormik } from "formik";
import { object, string } from "yup";

import { ArrowLeft, ChevronLeft } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { extractYouTubeId, rgbaDataURL } from "@/lib/utils";

import CustomerInfo from "./customer-info";
import SlotPicker from "./slot-picker";
import SelectedSlotCard from "./seleted-slot-card";

import moment from "moment";

const generateInitialValues = (formFields) => {
  const initialValues = {};

  formFields.forEach((field) => {
    initialValues[field.name] = "";
  });

  return initialValues;
};

const generateValidationSchema = (formFields) => {
  const validators = {};

  formFields.forEach((field) => {
    if (field.is_required) {
      validators[field.name] = string().required(`${field.name} is required`);
    }
  });

  const validationSchema = object({
    ...validators,
  });

  return validationSchema;
};

export default function ProductDetails({
  product,
  storeSlug,
  visitor_timezone,
  calendarData,
}) {
  const { fields, slug: productSlug } = product;

  const [dateAndSlotContent, setDateAndSlotContent] = useState("CALENDER");

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
      console.log(values);
    },
  });

  // Display product price logic
  const acutalPrice = parseFloat(product?.discount_price)
    ? parseFloat(product?.discount_price).toFixed(2)
    : !parseFloat(product?.discount_price) && parseFloat(product?.price)
      ? parseFloat(product?.price).toFixed(2)
      : "Free";

  const hasDiscount = parseFloat(product?.discount_price) ? true : false;

  const enabledDates = calendarData.map((date) => date.date);

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

  return (
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

      {/* <button onClick={formik.handleSubmit} type="submit">
        Submit
      </button> */}
    </div>
  );
}
