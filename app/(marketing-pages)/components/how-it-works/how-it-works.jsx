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
      <section className="mx-auto max-w-4xl px-4 pb-24 pt-16 md:pt-32">
        <SectionHeading
          headingLongText="How Flexpoint Works"
          headingShortText="Effortless, Easy Steps"
          headingPara="Flexpoint has everything you need to manage and grow your business—all in one place."
        />

        <div className="flex flex-col gap-6">
          {workingStrategies.map((item) => (
            <article
              key={item.id}
              className="flex flex-col-reverse rounded-2xl border border-[#E1E4EA] md:flex-row"
            >
              <div className="w-full p-4 md:w-3/5 md:p-12">
                <span className="mb-1 text-[12px] font-medium uppercase text-[#5C5C5C]">
                  {item.subTitle}
                </span>
                <h4 className="mb-4 text-2xl font-medium text-heading">
                  {item.title}
                </h4>
                <p className="mb- mb-8 text-[#5C5C5C]">{item.shortDes}</p>
              </div>

              <figure className="w-full md:w-2/5">
                <Image
                  src={item.image}
                  alt={`${item.title} image`}
                  className="w-full"
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
