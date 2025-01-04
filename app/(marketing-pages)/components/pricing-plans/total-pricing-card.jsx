import FlexpointLogo from "@/public/assets/img/logo-with-bg.svg";
import Image from "next/image";

const TotalPricingCard = () => {
  return (
    <div className="appear-animation rounded-2xl border border-success-base bg-white">
      <p className="border-b border-black/5 py-4 text-center text-sm font-medium text-heading md:px-6 md:text-start md:text-lg">
        You will get everything here only at
      </p>

      <div className="flex flex-col items-center justify-between px-6 pb-5 pt-4 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <figure>
            <Image
              src={FlexpointLogo}
              width={48.45}
              height={48.45}
              alt="Flexpoint Logo"
              className="min-h-12 min-w-12"
            />
          </figure>
          <div className="space-y-1 text-center md:text-start">
            <h5 className="text-[28.2px] font-bold leading-[110%] text-heading">
              Join Flexpoint Family
            </h5>
            <p className="leading-6 tracking-[-0.08px] text-para">
              Everything you need in one place
            </p>
          </div>
        </div>
        <div className="mt-5 md:mt-0">
          <span className="text-[40.2px] font-bold leading-[48px] tracking-[-1.6px] text-success-base">
            $27/m
          </span>
        </div>
      </div>
    </div>
  );
};

export default TotalPricingCard;
