import { cn } from "@/lib/utils";
import { CheckCircle, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const FeatureCard = ({ feature }) => {
  return (
    <article
      style={{
        // backgroundColor: feature.backgroundColor,
        border: `1px solid ${feature.borderColor}`,
      }}
      className={cn(
        "appear-animation max-h-[460px] w-full flex-col-reverse gap-3 rounded-2xl bg-gradient-to-b px-10 md:flex md:gap-20 md:px-16",
        feature.imgPosition === "RIGHT" ? "md:flex-row" : "md:flex-row-reverse",
        feature.backgroundColor,
      )}
    >
      <div className="w w-full py-8 md:w-3/5 md:py-20">
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
              <CheckCircle2 size={18} color={feature.iconColor} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <figure className="flex w-full items-center justify-center md:w-1/2">
        <Image src={feature.image} alt={`${feature.title} image`} />
      </figure>
    </article>
  );
};

export default FeatureCard;
