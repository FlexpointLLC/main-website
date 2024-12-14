import { cn } from "@/lib/utils";
import { CheckCircle, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const FeatureCard = ({ feature }) => {
  return (
    <article
      style={{
        backgroundColor: feature.backgroundColor,
        border: `1px solid ${feature.borderColor}`,
      }}
      className={cn(
        "md: flex w-full flex-col-reverse gap-3 rounded-2xl px-10 py-8 md:gap-8 md:px-10 md:py-20",
        feature.imgPosition === "RIGHT" ? "md:flex-row" : "md:flex-row-reverse",
      )}
    >
      <div className="w w-full md:w-3/5">
        <span className="mb-1 text-[12px] font-medium uppercase text-[#5C5C5C]">
          {feature.subTitle}
        </span>
        <h4 className="mb-4 text-2xl font-medium text-heading">
          {feature.title}
        </h4>
        <p className="mb- mb-8 text-[#5C5C5C]">{feature.shortDes}</p>

        <ul className="space-y-5">
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
      <figure className="flex w-full items-center justify-center md:w-2/5">
        <Image src={feature.image} alt={`${feature.title} image`} />
      </figure>
    </article>
  );
};

export default FeatureCard;
