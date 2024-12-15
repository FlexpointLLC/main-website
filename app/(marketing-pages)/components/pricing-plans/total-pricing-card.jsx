import FlexpointLogo from "@/public/assets/img/logo-with-bg.svg";
import Image from "next/image";

const TotalPricingCard = () => {
  return (
    <div className="rounded-2xl border border-success-base bg-white px-6 py-4">
      <p className="mb-8 text-lg font-medium text-heading">
        You will get everything here only at
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <figure>
            <Image src={FlexpointLogo} alt="Flexpoint Logo" />
          </figure>
          <div className="space-y-1">
            <h5 className="text-2xl font-bold text-heading">
              Join Flexpoint Family
            </h5>
            <p className="text-para">Everything you need in one place</p>
          </div>
        </div>
        <div>
          <span className="text-4xl font-bold text-success-base">$27/m</span>
        </div>
      </div>
    </div>
  );
};

export default TotalPricingCard;
