// import { useCreatePaymentIntentQuery } from "@/redux/api/paymentApi";
// import { Elements, PaymentElement } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import { cn } from "@/lib/utils";
// import { Skeleton } from "@/components/ui/skeleton";

// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
// );

// export default function Payment() {
//   const {
//     data: paymentIntentData,
//     isFetching: isPaymentIntentFetching,
//     isError: isPaymentIntentError,
//   } = useCreatePaymentIntentQuery();

//   const isLoading =
//     (isPaymentIntentFetching && !paymentIntentData) || isPaymentIntentError;

//   return (
//     <div>
//       <div
//         className={cn("mt-2 space-y-[15px]", {
//           hidden: !isLoading,
//         })}
//       >
//         {[...Array(2).keys()].map((item) => (
//           <Skeleton
//             key={item}
//             className="h-10 w-full animate-pulse bg-gray-200"
//           ></Skeleton>
//         ))}
//       </div>

//       {!isLoading && (
//         <Elements
//           stripe={stripePromise}
//           options={{
//             clientSecret: paymentIntentData?.data.client_secret,
//             appearance: {
//               variables: {
//                 colorPrimary: "#37C390",
//               },
//             },
//           }}
//         >
//           <PaymentElement
//             options={{
//               layout: { type: "tabs" },
//             }}
//           />
//         </Elements>
//       )}
//     </div>
//   );
// }

import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const OneTimePayment = ({ amount, currency }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!stripe || !elements) {
      setError("Stripe.js has not loaded yet.");
      setIsLoading(false);
      return;
    }

    // Get Card Element
    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      setError("Card Element not found.");
      setIsLoading(false);
      return;
    }

    try {
      // Create a token from Card Element
      const { token, error: tokenError } =
        await stripe.createToken(cardElement);

      console.log("token", token);

      if (tokenError) {
        setError(tokenError.message);
        setIsLoading(false);
        return;
      }

      // Send token to the server to create a charge
      const response = await axios.post("/api/charge", {
        token: token.id,
        amount,
        currency,
      });

      if (response.data.success) {
        alert("Payment successful!");
      } else {
        setError("Payment failed. Please try again.");
      }
    } catch (err) {
      setError("An unexpected error occurred.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handlePayment}>
      <CardElement />
      {error && <div style={{ color: "red" }}>{error}</div>}
      <button type="submit" disabled={!stripe || isLoading}>
        {isLoading ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
};

export default OneTimePayment;
