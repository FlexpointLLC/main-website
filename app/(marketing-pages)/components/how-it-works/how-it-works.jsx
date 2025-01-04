import Image from "next/image";

import NoCodeImg from "@/public/assets/img/no-code.svg";
import SeamlessCheckoutImg from "@/public/assets/img/seamless-checkout.svg";
import AppIntegrationsImg from "@/public/assets/img/app-integrations.svg";

import SectionHeading from "../section-heading/section-heading";

const workingStrategies = [
  {
    id: "1",
    subTitle: "Get Started in Minutes",
    title: "No Code, No Hassle",
    shortDes:
      "Get started quickly without writing a single line of code. Build your store in minutes and focus on growing your business!",
    image: NoCodeImg,
  },
  {
    id: "2",
    subTitle: "Boost Your Sales",
    title: "Seamless 1-Tap Checkout",
    shortDes:
      "Make it easy for your customers to purchase with just one tap. Flexpoint optimizes your checkout process to increase conversions and reduce friction.",
    image: SeamlessCheckoutImg,
  },
  {
    id: "3",
    subTitle: "Connect Your Tools",
    title: "Effortless App Integrations",
    shortDes:
      "Connect with all the tools you love. Flexpoint integrates with the top apps to keep your business running smoothly.",
    image: AppIntegrationsImg,
  },
];

const HowItWorks = () => {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-[786px] px-4 pb-28 pt-16 md:pt-32">
        <SectionHeading
          headingLongText="How Flexpoint Works"
          headingShortText="Effortless, Easy Steps"
          headingPara="Flexpoint has everything you need to manage and grow your business—all in one place."
          extraClassNames={"md:mb-10"}
        />

        <div className="flex flex-col gap-6">
          {workingStrategies.map((item) => (
            <article
              key={item.id}
              className="appear-animation flex flex-col-reverse overflow-hidden rounded-2xl border border-[#E1E4EA] md:flex-row"
            >
              <div className="flex flex-col justify-center pl-12">
                <span className="mb-1 text-[11.8px] font-medium uppercase leading-4 tracking-[0.48px] text-[#5C5C5C]">
                  {item.subTitle}
                </span>
                <h4 className="mb-4 text-2xl font-medium tracking-[-0.72px] text-heading">
                  {item.title}
                </h4>
                <p className="leading-6 tracking-[-0.18px] text-[#5C5C5C]">
                  {item.shortDes}
                </p>
              </div>

              <figure className="ml-10 h-full w-full">
                <Image
                  width={309}
                  height={234}
                  src={item.image}
                  alt={`${item.title} image`}
                  className="h-full w-full"
                />
              </figure>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
