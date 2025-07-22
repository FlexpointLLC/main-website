"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useFormik } from "formik";
import { object, string } from "yup";
import storeFooterLogo from "@/public/assets/img/store-footer-logo.svg";
import { ArrowLeft, BadgeCheck, ChevronLeft, CreditCard } from "lucide-react";
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
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import moment from "moment";
import { toast } from "sonner";
import { useGetProductDetailsQuery } from "@/redux/api/productApi";
import { useCreateAppointmentMutation } from "@/redux/api/appointmentApi";
import { useGetAvailableSlotsQuery } from "@/redux/api/scheduleApi";
import GroupSlot from "./group-slot";

// Utility functions
const generateSlotForSelectedDate = (date, availableSlots) => {
  const selectedFormattedDate = moment(date).format("YYYY-MM-DD");
  return (
    availableSlots.available_slots[selectedFormattedDate]?.map((slot) => ({
      start: slot.startTime,
      end: slot.endTime,
      meridiem: slot.startTime.slice("-2"),
    })) || []
  );
};

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

// Build appointment payload
const buildAppointmentPayload = (
  values,
  fields,
  product,
  appliedCoupon,
  paymentData = {},
) => {
  const staticFields = fields.slice(0, 3).map((f) => f.name.toLowerCase());
  const dynamicFields = fields.slice(3).map((f) => ({
    name: f.name,
    value: values[f.name.toLowerCase()],
  }));

  const payload = {
    ...staticFields.reduce((acc, field) => {
      acc[field] = values[field];
      return acc;
    }, {}),
    product_id: product?.id,
    applied_coupon: appliedCoupon,
    dynamic_fields: dynamicFields.length ? dynamicFields : null,
    type: product?.type,
    ...paymentData,
  };

  // Add scheduling data for coaching and group-call products
  if (product?.type === "coaching" || product?.type === "group-call") {
    payload.date = moment(values.picked_date).format("YYYY-MM-DD");
    payload.start_at = values.picked_slot;
    payload.end_at = values.picked_slot_end;
  }

  return payload;
};

// Payment Method Selector Component
const PaymentMethodSelector = ({
  selectedMethod,
  onSelect,
  hasStripe,
  hasPayPal,
  disabled = false,
}) => {
  if (!hasStripe || !hasPayPal) return null;

  return (
    <div className="mb-6">
      <h3 className="mb-3 text-sm font-medium text-gray-700">
        Choose Payment Method
      </h3>
      <div
        className={`grid grid-cols-2 gap-3 ${disabled ? "pointer-events-none opacity-50" : ""}`}
      >
        <button
          type="button"
          onClick={() => onSelect("stripe")}
          disabled={disabled}
          className={`flex items-center justify-center gap-2 rounded-lg border-2 p-3 transition-colors ${
            selectedMethod === "stripe"
              ? "border-[#37C390] bg-[#37C390] text-white"
              : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
          }`}
        >
          <CreditCard size={20} />
          <span className="font-medium">Card</span>
        </button>
        <button
          type="button"
          onClick={() => onSelect("paypal")}
          disabled={disabled}
          className={`flex items-center justify-center gap-2 rounded-lg border-2 p-3 transition-colors ${
            selectedMethod === "paypal"
              ? "border-[#37C390] bg-[#37C390] text-white"
              : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
          }`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.52h-.98c-.799 0-1.595-.652-1.52-1.401L8.04 3.02C8.1 2.65 8.418 2.4 8.79 2.4h7.66c1.807 0 3.344.29 4.399 1.28.755.708 1.127 1.692.926 2.84-.024.137-.049.277-.077.42-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9L8.69 21.743a.625.625 0 0 1-.614.507h-.98c-.799 0-1.595-.652-1.52-1.401L8.04 3.02C8.1 2.65 8.418 2.4 8.79 2.4h7.66c2.807 0 4.88.829 5.826 2.497z" />
          </svg>
          <span className="font-medium">PayPal</span>
        </button>
      </div>
    </div>
  );
};

// PayPal Button Component
const PayPalPaymentButton = ({
  amount,
  currency,
  onSuccess,
  onError,
  disabled,
  product,
}) => {
  const [{ isPending }] = usePayPalScriptReducer();

  if (isPending) {
    return (
      <div className="flex h-12 items-center justify-center rounded bg-gray-100">
        <div className="text-sm text-gray-600">Loading PayPal...</div>
      </div>
    );
  }

  return (
    <PayPalButtons
      disabled={disabled}
      style={{
        layout: "vertical",
        color: "blue",
        shape: "rect",
        label: "paypal",
        height: 48,
      }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: amount.toString(),
                currency_code: currency || "USD",
              },
              description: product?.title || "Product Purchase",
            },
          ],
          application_context: {
            shipping_preference: "NO_SHIPPING",
          },
        });
      }}
      onApprove={async (data, actions) => {
        try {
          const order = await actions.order.capture();
          console.log(order);
          await onSuccess(order);
        } catch (error) {
          onError("PayPal payment failed. Please try again.");
        }
      }}
      onError={() => onError("PayPal payment failed. Please try again.")}
      onCancel={() => {}}
    />
  );
};

// Stripe wrapper component
const StripeEnabledContent = (props) => {
  const stripe = useStripe();
  const elements = useElements();

  return (
    <ProductDetailsContent {...props} stripe={stripe} elements={elements} />
  );
};

const ProductDetailsContent = ({
  productData,
  product,
  productSlug,
  storeSlug,
  fields,
  branding,
  stripe = null,
  elements = null,
}) => {
  const router = useRouter();
  const [viewState, setViewState] = useState("CALENDAR");
  const [appliedCoupon, setAppliedCoupon] = useState("");
  const [error, setError] = useState(null);
  const [formattedSlots, setFormattedSlots] = useState([]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const { data: availableSlots, isLoading: isSlotsLoading } =
    useGetAvailableSlotsQuery({ productSlug });
  const [createAppointment] = useCreateAppointmentMutation();

  const price =
    parseFloat(product?.discount_price) || parseFloat(product?.price);
  const isFree = price === 0;

  // Payment method availability
  const hasStripe = !!(
    productData?.data?.stripe_account_id &&
    productData?.data?.stripe_public_key &&
    productData?.data?.stripe_client_secret
  );
  const hasPayPal = !!(
    productData?.data?.paypal_client_id &&
    productData?.data?.paypal_client_secret
  );

  // Set default payment method
  useEffect(() => {
    if (!selectedPaymentMethod && !isFree) {
      if (hasStripe && hasPayPal) {
        setSelectedPaymentMethod("stripe");
      } else if (hasStripe) {
        setSelectedPaymentMethod("stripe");
      } else if (hasPayPal) {
        setSelectedPaymentMethod("paypal");
      }
    }
  }, [hasStripe, hasPayPal, selectedPaymentMethod, isFree]);

  useEffect(() => {
    setError(null);
  }, [selectedPaymentMethod]);

  const formik = useFormik({
    initialValues: {
      ...initializeFormValues(fields),
      picked_slot: "",
      picked_slot_end: "",
      picked_date: new Date(),
      picked_meridiem: "",
    },
    validationSchema: createValidationSchema(fields),
    onSubmit: async (values, { setSubmitting }) => {
      if (
        (product?.type === "coaching" || product?.type === "group-call") &&
        !values.picked_slot
      ) {
        toast.error("Please select a date and slot.");
        return;
      }
      setSubmitting(true);
      setError(null);

      try {
        await processPayment(values, setSubmitting);
      } catch {
        toast.error("Something went wrong. Please try again.");
        setSubmitting(false);
      }
    },
  });

  // Check if basic customer info (name and email) is filled
  const getBasicInfoComplete = () => {
    // Get the first two required fields (typically name and email)
    const basicFields = fields.slice(0, 2).filter((field) => field.is_required);
    return basicFields.every((field) => {
      const fieldValue = formik.values[field.name.toLowerCase()];
      return fieldValue && fieldValue.trim() !== "";
    });
  };

  const isBasicInfoComplete = getBasicInfoComplete();

  const processPayment = async (values, setSubmitting) => {
    let paymentData = { payment_method: selectedPaymentMethod || "free" };

    if (!isFree && selectedPaymentMethod === "stripe") {
      if (!stripe || !elements) {
        setError("Stripe.js not loaded.");
        setSubmitting(false);
        return;
      }

      const cardElement = elements.getElement(CardElement);
      const { token, error: tokenError } =
        await stripe.createToken(cardElement);
      const { paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      if (tokenError) {
        setError(tokenError.message);
        setSubmitting(false);
        return;
      }

      paymentData = {
        ...paymentData,
        card_token: token?.id || "",
        payment_method_id: paymentMethod?.id,
      };
    }

    const payload = buildAppointmentPayload(
      values,
      fields,
      product,
      appliedCoupon,
      paymentData,
    );
    const response = await createAppointment(payload).unwrap();
    const orderId = response?.appointment?.orderId;

    router.push(
      `/${storeSlug}/success?${orderId ? `order-id=${orderId}&` : ""}type=${product?.type}`,
    );
    setSubmitting(false);
  };

  const handlePayPalSuccess = async (order) => {
    const paymentData = {
      payment_method_type: "paypal",
      paypal_order_id: order.id,
      paypal_payment_id: order.purchase_units[0]?.payments?.captures[0]?.id,
    };

    try {
      const payload = buildAppointmentPayload(
        formik.values,
        fields,
        product,
        appliedCoupon,
        paymentData,
      );
      const response = await createAppointment(payload).unwrap();
      const orderId = response?.appointment?.orderId;

      router.push(
        `/${storeSlug}/success?${orderId ? `order-id=${orderId}&` : ""}type=${product?.type}`,
      );
    } catch {
      toast.error(
        "Payment successful but order processing failed. Please contact support.",
      );
    }
  };

  const handlePayPalError = (error) => {
    setError(error);
    toast.error(error);
  };

  useEffect(() => {
    if (!isSlotsLoading) {
      setFormattedSlots(
        generateSlotForSelectedDate(formik.values.picked_date, availableSlots),
      );
    }
  }, [formik.values.picked_date, availableSlots, isSlotsLoading]);

  // Calculated values
  const enabledDates = Object.keys(availableSlots?.available_slots || {});
  const isDateDisabled = (date) =>
    !enabledDates.includes(moment(date).format("YYYY-MM-DD"));
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

  const renderSchedulingView = () => {
    if (product?.type === "coaching") {
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
    }

    if (product?.type === "group-call") {
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
    }

    return null;
  };

  const needsScheduling =
    product?.type === "coaching" || product?.type === "group-call";
  const isAvailable = productData?.data.available_purchase;

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        {/* Header Image */}
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

        {/* Product Title */}
        <div className="pt-5">
          <h1 className="text-2xl font-semibold text-fl-border">
            {product?.title}
          </h1>
        </div>

        {/* Price Section */}
        <div className="py-4">
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

        {/* Description */}
        <div className="py-6">
          <div
            className="prose prose-sm !p-0 text-xs text-para"
            dangerouslySetInnerHTML={{ __html: product?.description }}
          />
        </div>

        {/* Promo Video */}
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

        {/* Scheduling Section */}
        {needsScheduling && (
          <>
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

              <div
                className={
                  product?.type === "coaching" ? "rounded-lg bg-white" : ""
                }
              >
                {renderSchedulingView()}
              </div>
            </div>
            <hr className="h-[2px] bg-black/5" />
          </>
        )}

        <CustomerInfo formik={formik} fields={fields} />
        <hr className="h-[2px] bg-black/5" />

        <HandelCoupon
          product={product}
          appliedCoupon={appliedCoupon}
          setAppliedCoupon={setAppliedCoupon}
        />

        {/* Total Price */}
        <div className="flex items-center justify-between pt-6">
          <p className="text-sm text-para">Total:</p>
          <h4 className="text-xl font-semibold text-fl-border">
            {isFree ? "Free" : `${product.currency_symbol}${totalPrice}`}
          </h4>
        </div>

        {/* Payment Section */}
        {!isFree && (
          <div className="mt-6">
            {!isAvailable && (
              <div className="mb-4 rounded-md border border-red-300 bg-red-100 p-3">
                <p className="text-sm text-red-700">
                  This product is currently sold out or unavailable for
                  purchase.
                </p>
              </div>
            )}

            {!isBasicInfoComplete && (
              <div className="mb-4 rounded-md border border-amber-300 bg-amber-50 p-3">
                <p className="text-sm text-amber-700">
                  Please fill in your name and email above to continue with
                  payment.
                </p>
              </div>
            )}

            <PaymentMethodSelector
              selectedMethod={selectedPaymentMethod}
              onSelect={setSelectedPaymentMethod}
              hasStripe={hasStripe}
              hasPayPal={hasPayPal}
            />

            {/* Stripe Card Element */}
            {selectedPaymentMethod === "stripe" && hasStripe && (
              <div className="mb-4">
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
                    disabled: !isBasicInfoComplete,
                  }}
                  className={`mb-4 rounded-md border bg-white p-3 ${
                    !isBasicInfoComplete ? "pointer-events-none opacity-50" : ""
                  }`}
                />
              </div>
            )}

            {/* PayPal Buttons */}
            {selectedPaymentMethod === "paypal" && hasPayPal && (
              <div
                className={`mb-4 ${!isBasicInfoComplete ? "pointer-events-none opacity-50" : ""}`}
              >
                <PayPalPaymentButton
                  amount={parseFloat(totalPrice)}
                  currency={product?.currency || "USD"}
                  onSuccess={handlePayPalSuccess}
                  onError={handlePayPalError}
                  disabled={
                    !isAvailable || formik.isSubmitting || !isBasicInfoComplete
                  }
                  product={product}
                />
              </div>
            )}

            {error && (
              <div className="mb-4 max-w-[360px] break-all text-sm text-red-600">
                {error}
              </div>
            )}
          </div>
        )}

        {/* Submit Button */}
        {(selectedPaymentMethod === "stripe" || isFree) && (
          <Button
            className="mt-2 w-full"
            type="submit"
            variant="primaryDefault"
            title={
              !isAvailable
                ? "Product sold out"
                : !isBasicInfoComplete && !isFree
                  ? "Please fill in your name and email"
                  : null
            }
            disabled={
              !isAvailable ||
              formik.isSubmitting ||
              (!isFree && !isBasicInfoComplete) ||
              (!isFree &&
                selectedPaymentMethod === "stripe" &&
                !productData?.data?.stripe_client_secret)
            }
          >
            {formik.isSubmitting
              ? "Processing..."
              : product?.bottom_button_text}
          </Button>
        )}

        {/* Security Badge */}
        <div className="mt-[10px] flex items-center justify-center gap-[2px] text-center text-xs text-[#525866]">
          <BadgeCheck size={16} color="#1FC16B" />
          <p>This is a secure 256-bit SSL encrypted payment</p>
        </div>
      </form>

      {/* Footer */}
      {branding ? (
        <footer className="my-6 flex items-center justify-center gap-[7px]">
          <p className="pl-4 text-xs font-medium text-para">Powered by</p>
          <Image src={storeFooterLogo} alt="store footer logo" />
        </footer>
      ) : (
        <div className="my-6"></div>
      )}
    </>
  );
};

export default function ProductDetails({
  productSlug,
  storeSlug,
  fields,
  branding,
}) {
  const { data: productData, isLoading: isProductLoading } =
    useGetProductDetailsQuery({
      storeSlug,
      productSlug,
    });

  const product = productData?.data?.productDetails || null;
  const isFreeProduct = product?.price === "0.00" && !product?.discount_price;

  // Payment configuration
  const stripeConfig = {
    publicKey: productData?.data?.stripe_public_key,
    accountId: productData?.data?.stripe_account_id,
    clientSecret: productData?.data?.stripe_client_secret,
  };

  const paypalConfig = {
    clientId: productData?.data?.paypal_client_id,
    clientSecret: productData?.data?.paypal_client_secret,
  };

  const areStripeKeysValid =
    stripeConfig.publicKey?.startsWith("pk_") &&
    stripeConfig.accountId?.length > 10;

  const arePayPalKeysValid =
    paypalConfig.clientId?.length > 0 && paypalConfig.clientSecret?.length > 0;

  const stripePromise = useMemo(() => {
    if (!areStripeKeysValid) return null;
    return loadStripe(stripeConfig.publicKey, {
      stripeAccount: stripeConfig.accountId,
    });
  }, [stripeConfig.publicKey, stripeConfig.accountId, areStripeKeysValid]);

  const paypalOptions = useMemo(() => {
    if (!arePayPalKeysValid) return null;
    return {
      "client-id": paypalConfig.clientId,
      currency: product?.currency || "USD",
      intent: "capture",
      components: "buttons",
    };
  }, [paypalConfig.clientId, arePayPalKeysValid, product?.currency]);

  const needsStripeProcessing = !isFreeProduct && areStripeKeysValid;
  const needsPayPalProcessing = !isFreeProduct && arePayPalKeysValid;

  if (
    isProductLoading ||
    (needsStripeProcessing && !stripeConfig.clientSecret)
  ) {
    return <Loader />;
  }

  const commonProps = {
    productData,
    product,
    productSlug,
    storeSlug,
    fields,
    branding,
  };

  // Free product
  if (isFreeProduct) {
    return <ProductDetailsContent {...commonProps} />;
  }

  // Both payment methods
  if (needsStripeProcessing && needsPayPalProcessing) {
    return (
      <PayPalScriptProvider options={paypalOptions}>
        <Elements
          stripe={stripePromise}
          options={{ clientSecret: stripeConfig.clientSecret }}
        >
          <StripeEnabledContent {...commonProps} />
        </Elements>
      </PayPalScriptProvider>
    );
  }

  // PayPal only
  if (needsPayPalProcessing) {
    return (
      <PayPalScriptProvider options={paypalOptions}>
        <ProductDetailsContent {...commonProps} />
      </PayPalScriptProvider>
    );
  }

  // Stripe only
  if (needsStripeProcessing) {
    return (
      <Elements
        stripe={stripePromise}
        options={{ clientSecret: stripeConfig.clientSecret }}
      >
        <StripeEnabledContent {...commonProps} />
      </Elements>
    );
  }

  // Fallback
  return <ProductDetailsContent {...commonProps} />;
}
