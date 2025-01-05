import { cn } from "@/lib/utils";
import { CheckCircle, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const FeatureCard = ({ feature }) => {
  return (
    <article
      style={{
        border: `1px solid ${feature.borderColor}`,
      }}
      className={cn(
        "appear-animation flex w-full flex-col-reverse gap-3 rounded-2xl bg-gradient-to-b px-5 pt-10 md:flex md:max-h-[460px] md:gap-20 md:px-16 md:pt-0",
        feature.imgPosition === "RIGHT" ? "md:flex-row" : "md:flex-row-reverse",
        feature.backgroundColor,
      )}
    >
      <div className="relative w-full py-8 md:w-3/5 md:py-20">
        <span className="mb-1 text-[11.8px] font-medium uppercase leading-4 tracking-[0.48px] text-[#5C5C5C]">
          {feature.subTitle}
        </span>
        <h4 className="mb-4 text-2xl font-medium tracking-[-0.72px] text-heading">
          {feature.title}
        </h4>
        <p className="mb-8 leading-6 tracking-[-0.18px] text-[#5C5C5C]">
          {feature.shortDes}
        </p>

        <ul className="space-y-5 tracking-[-0.08px]">
          {feature.list.map((item, index) => (
            <li
              key={index}
              className="gap flex items-center gap-2 text-sm text-[#272727]"
            >
              <CheckCircle2
                size={18}
                color={feature.iconColor}
                className="min-h-[18px] min-w-[18px]"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="absolute -right-4 bottom-0 z-10">
          <Image
            src={feature.vector}
            alt="this is decorative vector"
            width={280}
            height={280}
          />
        </div>
      </div>
      <figure className="flex w-full items-center justify-center md:w-1/2">
        <Image src={feature.image} alt={`${feature.title} image`} />
      </figure>
    </article>
  );
};

export default FeatureCard;
