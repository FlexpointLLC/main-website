import FlexpointLogo from "@/public/assets/img/logo-with-bg.svg";
import Image from "next/image";

const TotalPricingCard = () => {
  return (
    <div className="rounded-2xl border border-success-base bg-white">
      <p className="border-b border-black/5 px-6 py-4 text-lg font-medium text-heading">
        You will get everything here only at
      </p>

      <div className="flex items-center justify-between px-6 pb-5 pt-4">
        <div className="flex items-center gap-4">
          <figure>
            <Image
              src={FlexpointLogo}
              width={48.45}
              height={48.45}
              alt="Flexpoint Logo"
            />
          </figure>
          <div className="space-y-1">
            <h5 className="text-[28.2px] font-bold leading-[110%] text-heading">
              Join Flexpoint Family
            </h5>
            <p className="leading-6 tracking-[-0.08px] text-para">
              Everything you need in one place
            </p>
          </div>
        </div>
        <div>
          <span className="text-[40.2px] font-bold leading-[48px] tracking-[-1.6px] text-success-base">
            $27/m
          </span>
        </div>
      </div>
    </div>
  );
};

export default TotalPricingCard;
