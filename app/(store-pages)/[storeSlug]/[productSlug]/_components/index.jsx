"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { object, string } from "yup";
import storeFooterLogo from "@/public/assets/img/store-footer-logo.svg";
import { ArrowLeft, BadgeCheck, ChevronLeft } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  extractYouTubeId,
  groupEventsByDate,
  percentage,
  rgbaDataURL,
} from "@/lib/utils";
import CustomerInfo from "./customer-info";
import SlotPicker from "./slot-picker";
import SelectedSlotCard from "./seleted-slot-card";
import HandelCoupon from "./handel-coupon";
import Loader from "@/components/global/loader/loader";
import { Button } from "@/components/ui/button";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  useStripe,
  useElements,
  CardElement,
} from "@stripe/react-stripe-js";
import moment from "moment";
import { toast } from "sonner";
import { useGetProductDetailsQuery } from "@/redux/api/productApi";

import { useCreatePaymentIntentQuery } from "@/redux/api/paymentApi";
import { useCreateAppointmentMutation } from "@/redux/api/appointmentApi";

import { useGetAvailableSlotsQuery } from "@/redux/api/scheduleApi";

const generateSlotForSelectedDate = (date, availableSlots) => {
  const selectedFormattedDate = moment(date).format("YYYY-MM-DD");

  const formattedSlots = availableSlots.available_slots[
    selectedFormattedDate
  ]?.map((slot) => {
    const formattedSlot = {
      start: slot.startTime,
      end: slot.endTime,
      meridiem: slot.startTime.slice("-2"),
    };

    return formattedSlot;
  });

  return formattedSlots;
};

import GroupSlot from "./group-slot";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
);

const initializeFormValues = (fields) =>
  fields.reduce(
    (values, field) => ({ ...values, [field.name.toLowerCase()]: "" }),
    {},
  );

const createValidationSchema = (fields) =>
  object(
    fields.reduce(
      (validators, field) =>
        field.is_required
          ? {
              ...validators,
              [field.name.toLowerCase()]: string().required(
                `${field.name} is required`,
              ),
            }
          : validators,
      {},
    ),
  );

const ProductDetailsContent = ({ productSlug, storeSlug, fields }) => {
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();
  const [viewState, setViewState] = useState("CALENDAR");
  const [appliedCoupon, setAppliedCoupon] = useState("");
  const [error, setError] = useState(null);
  const [formattedSlots, setFormattedSlots] = useState([]);

  const { data: productData, isLoading: isProductLoading } =
    useGetProductDetailsQuery({ storeSlug, productSlug });
  const { data: availableSlots, isLoading: isSlotsLoading } =
    useGetAvailableSlotsQuery({
      productSlug,
    });

  const [createAppointment] = useCreateAppointmentMutation();

  const formik = useFormik({
    initialValues: {
      ...initializeFormValues(fields),
      picked_slot: "",
      picked_slot_end: "",
      picked_date: new Date(),
      picked_meridiem: "",
      card_token: "",
    },
    validationSchema: createValidationSchema(fields),
    onSubmit: async (values, { setSubmitting }) => {
      if (!values.picked_slot) {
        toast.error("Please select a date and slot.");
        return;
      }

      setSubmitting(true);
      setError(null);

      try {
        const { productDetails: product } = productData?.data || {};
        let tokenId = "";

        if (product?.price !== "0.00") {
          if (!stripe || !elements) {
            setError("Stripe.js not loaded.");
            return;
          }

          const cardElement = elements.getElement(CardElement);
          const { token, error: tokenError } =
            await stripe.createToken(cardElement);
          if (tokenError) {
            setError(tokenError.message);
            return;
          }
          tokenId = token?.id || "";
        }

        const staticFields = fields
          .slice(0, 3)
          .map((f) => f.name.toLowerCase());
        const dynamicFields = fields.slice(3).map((f) => ({
          name: f.name,
          value: values[f.name.toLowerCase()],
        }));

        const payload = {
          ...staticFields.reduce((acc, field) => {
            acc[field] = values[field];
            return acc;
          }, {}),
          date: moment(values.picked_date).format("YYYY-MM-DD"),
          start_at: moment(values.picked_slot, ["HH:mm"]).format("hh:mm A"),
          end_at: moment(values.picked_slot_end, ["HH:mm"]).format("hh:mm A"),
          type: product?.platform,
          product_id: product?.id,
          applied_coupon: appliedCoupon,
          dynamic_fields: dynamicFields.length ? dynamicFields : null,
          card_token: product?.price !== "0.00" ? tokenId : "",
        };

        const response = await createAppointment(payload).unwrap();

        const orderId = response?.appointment?.orderId;

        if (orderId) {
          router.push(`/${storeSlug}/success?order-id=${orderId}`);
        } else {
          router.push(`/${storeSlug}/success`);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
        toast.error("Something went wrong. Please try again.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  useEffect(() => {
    if (!isSlotsLoading) {
      setFormattedSlots(
        generateSlotForSelectedDate(formik.values.picked_date, availableSlots),
      );
    }
  }, [formik.values.picked_date, availableSlots, isSlotsLoading]);

  if (isProductLoading | isSlotsLoading) return <Loader />;

  const { productDetails: product } = productData?.data || {};

  const enabledDates = Object.keys(availableSlots?.available_slots);

  const isDateDisabled = (date) =>
    !enabledDates.includes(moment(date).format("YYYY-MM-DD"));

  const price =
    parseFloat(product?.discount_price) || parseFloat(product?.price);

  const isFree = price === 0;
  const hasDiscount =
    product?.discount_price && product?.discount_price !== "0.00";

  const formattedPrice = price.toFixed(2);
  const totalPrice = appliedCoupon
    ? (
        formattedPrice -
        percentage(
          parseInt(
            product?.coupons?.find((c) => c.code === appliedCoupon)?.discount ||
              0,
          ),
          formattedPrice,
        )
      ).toFixed(2)
    : formattedPrice;

  const events = groupEventsByDate(product?.events);

  const renderCoachingView = () => {
    switch (viewState) {
      case "CALENDAR":
        return (
          <Calendar
            mode="single"
            onSelect={(date) => {
              formik.setFieldValue("picked_date", date);
              setViewState("SLOT");
            }}
            selected={formik.values.picked_date}
            disabled={isDateDisabled}
          />
        );
      case "SLOT":
        return (
          <SlotPicker
            picked_slot={formik.values.picked_slot}
            onSlotChange={formik.setFieldValue}
            setViewState={setViewState}
            selectedDate={formik.values.picked_date}
            productSlug={productSlug}
            availableSlots={formattedSlots}
          />
        );
      case "RESULT":
        return (
          <SelectedSlotCard
            handleChangeDate={() => setViewState("CALENDAR")}
            selectedDate={formik.values.picked_date}
            slotStartTime={formik.values.picked_slot}
            slotEndTime={formik.values.picked_slot_end}
            selectedMeridiem={formik.values.picked_meridiem}
          />
        );
      default:
        return null;
    }
  };

  const renderGroupCallView = () => {
    switch (viewState) {
      case "CALENDAR":
        return (
          <GroupSlot
            events={events}
            setViewState={setViewState}
            formik={formik}
          />
        );
      case "RESULT":
        return (
          <SelectedSlotCard
            handleChangeDate={() => setViewState("CALENDAR")}
            selectedDate={formik.values.picked_date}
            slotStartTime={formik.values.picked_slot}
            slotEndTime={formik.values.picked_slot_end}
            selectedMeridiem={formik.values.picked_meridiem}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="relative">
          {product?.header_image && (
            <Image
              src={product.header_image}
              alt={product?.title || "Product Image"}
              width={375}
              height={215}
              className="rounded-bl-lg rounded-br-lg"
              loading="lazy"
              quality={100}
              placeholder="blur"
              blurDataURL={rgbaDataURL(216, 228, 233)}
            />
          )}
          <Link
            href={`/${storeSlug}`}
            className="absolute left-2 top-2 flex size-8 items-center justify-center rounded-full bg-white bg-opacity-50"
          >
            <ArrowLeft size={16} className="text-para" />
          </Link>
        </div>

        <div className="pb-4 pt-6">
          <p className="text-xs text-para">Price</p>
          <div className="flex items-center gap-[6px]">
            <h3 className="text-2xl font-semibold text-fl-border">
              {isFree ? "Free" : `${product?.currency_symbol}${totalPrice}`}
            </h3>
            {hasDiscount && (
              <p className="text-xs text-para line-through">
                {product.currency_symbol}
                {parseFloat(product?.price).toFixed(2)}
              </p>
            )}
          </div>
        </div>

        <hr className="h-[2px] bg-black/5" />

        <div className="py-6">
          <div
            className="prose prose-sm !p-0 text-xs text-para"
            dangerouslySetInnerHTML={{ __html: product?.description }}
          />
        </div>

        {product?.promo_video && extractYouTubeId(product?.promo_video) && (
          <div className="pb-6">
            <iframe
              height={215}
              width="100%"
              title="promo-video"
              src={`https://www.youtube.com/embed/${extractYouTubeId(product?.promo_video)}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
              allowFullScreen
            />
          </div>
        )}

        <hr className="h-[2px] bg-black/5" />

        <div className="space-y-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[2px]">
              {(viewState === "SLOT" || viewState === "RESULT") && (
                <ChevronLeft
                  size={16}
                  className="cursor-pointer"
                  onClick={() => {
                    product?.type === "group-call"
                      ? setViewState("CALENDAR")
                      : setViewState(
                          viewState === "SLOT" ? "CALENDAR" : "SLOT",
                        );
                  }}
                />
              )}
              <h3
                title={product?.bottom_title}
                className="max-w-64 truncate font-semibold text-fl-border"
              >
                {viewState === "SLOT" || viewState === "RESULT"
                  ? moment(formik.values.picked_date).format("MMM DD")
                  : product?.bottom_title}
              </h3>
            </div>
            <p className="text-xs text-para">
              {productData?.data?.visitor_timezone}
            </p>
          </div>

          {product?.type === "coaching" ? (
            <div className="rounded-lg bg-white">{renderCoachingView()}</div>
          ) : (
            product?.type === "group-call" && <div>{renderGroupCallView()}</div>
          )}
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
            {isFree ? "Free" : `${product.currency_symbol}${totalPrice}`}
          </h4>
        </div>

        {!isFree && (
          <div className="mt-6">
            <CardElement
              onChange={(e) => setError(e.error?.message)}
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": { color: "#aab7c4" },
                  },
                  invalid: { color: "#9e2146" },
                },
                hidePostalCode: true,
              }}
              className="mb-4 rounded-md border bg-white p-3"
            />
            {error && <div style={{ color: "red" }}>{error}</div>}
          </div>
        )}

        <Button
          className="mt-2 w-full"
          type="submit"
          variant="primaryDefault"
          disabled={!stripe || !elements || formik.isSubmitting}
        >
          {formik.isSubmitting ? "Processing..." : product?.bottom_button_text}
        </Button>

        <div className="mt-[10px] flex items-center justify-center gap-[2px] text-center text-xs text-[#525866]">
          <BadgeCheck size={16} color="#1FC16B" />
          <p>This is a secure 256-bit SSL encrypted payment</p>
        </div>
      </form>

      <footer className="my-6 flex items-center justify-center gap-[7px]">
        <p className="pl-4 text-xs font-medium text-para">Powered by</p>
        <Image src={storeFooterLogo} alt="store footer logo" />
      </footer>
    </>
  );
};

export default function ProductDetails({ productSlug, storeSlug, fields }) {
  const {
    data: paymentIntentData,
    isFetching,
    isLoading,
    isError,
  } = useCreatePaymentIntentQuery();

  if (isFetching || isLoading || isError) return <Loader />;

  const clientSecret = paymentIntentData?.data?.client_secret;

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <ProductDetailsContent
        productSlug={productSlug}
        storeSlug={storeSlug}
        fields={fields}
      />
    </Elements>
  );
}
