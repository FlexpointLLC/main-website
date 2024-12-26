import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function HandelCoupon({
  product,
  appliedCoupon,
  setAppliedCoupon,
}) {
  const couponCodes = product?.coupons?.map((coupon) => coupon.code) || [];

  const [couponInput, setCouponInput] = useState("");
  const [errorMessgae, setErrorMessgae] = useState("");

  return (
    <div>
      {product.coupons?.length > 0 && (
        <div className="pt-6">
          <div className="flex flex-col gap-1.5">
            <div className="flex h-4 items-center justify-between">
              <Label>Discount Code </Label>
              {appliedCoupon && (
                <span
                  onClick={() => {
                    setAppliedCoupon("");
                    setCouponInput("");
                    setErrorMessgae("");
                  }}
                  className="cursor-pointer text-sm text-primary"
                >
                  Remove
                </span>
              )}
            </div>

            <div className="relative">
              <Input
                className="rounded-lg bg-white pr-16"
                value={couponInput}
                onChange={(e) => {
                  setCouponInput(e.target.value);
                  setErrorMessgae("");
                }}
                placeholder="Enter your discount code"
                disabled={appliedCoupon}
              />
              <button
                type="button"
                className={`absolute right-3 top-1/2 -translate-y-1/2 transform font-semibold text-primary ${
                  !couponInput || appliedCoupon
                    ? "cursor-not-allowed text-gray-400"
                    : "cursor-pointer text-primary"
                }`}
                disabled={!couponInput || appliedCoupon}
                onClick={() => {
                  if (couponCodes.includes(couponInput)) {
                    setAppliedCoupon(couponInput);
                  } else {
                    setErrorMessgae("Invalid coupon code");
                  }
                }}
              >
                {appliedCoupon ? "Applied" : "Apply"}
              </button>
            </div>
            {errorMessgae && (
              <p className="text-xs font-medium text-red-400">{errorMessgae}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
