import { Button } from "@/components/ui/button";
import SectionHeading from "../section-heading/section-heading";
import ToolsCard from "./tools-card";
import TotalPricingCard from "./total-pricing-card";
import Image from "next/image";
import avatarGroupImage from "@/public/assets/img/hero-avatar-group.svg";

const PricingPlans = () => {
  return (
    <div className="bg-[#F3F7FB]">
      <section className="mx-auto w-full px-4 py-20 md:max-w-[652px]">
        <SectionHeading
          headingLongText="Flexpoint vs Other Tools"
          headingShortText="What you will get?"
          headingPara="See how Flexpoint brings together 5+ services in one, helping you save big."
          extraClassNames={"md:mb-8"}
        />

        <ToolsCard />

        <TotalPricingCard />

        <div className="mt-6 w-full">
          <Button
            className={
              "flex h-fit w-full items-center gap-2 rounded-2xl py-4 text-lg font-semibold leading-6"
            }
          >
            <span>Get Started Now</span>

            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.25 12.75H20.75C21.1642 12.75 21.5 12.4142 21.5 12C21.5 11.5858 21.1642 11.25 20.75 11.25H4.25C3.83579 11.25 3.5 11.5858 3.5 12C3.5 12.4142 3.83579 12.75 4.25 12.75Z"
                fill="white"
              />
              <path
                d="M19.6893 12L13.4697 18.2197C13.329 18.3603 13.25 18.5511 13.25 18.75C13.25 18.9489 13.329 19.1397 13.4697 19.2803C13.6103 19.421 13.8011 19.5 14 19.5C14.1989 19.5 14.3897 19.421 14.5303 19.2803L21.2803 12.5303C21.5732 12.2374 21.5732 11.7626 21.2803 11.4697L14.5303 4.71967C14.3897 4.57902 14.1989 4.5 14 4.5C13.8011 4.5 13.6103 4.57902 13.4697 4.71967C13.329 4.86032 13.25 5.05109 13.25 5.25C13.25 5.44891 13.329 5.63968 13.4697 5.78033L19.6893 12Z"
                fill="white"
              />
            </svg>
          </Button>

          <div className="mt-6 flex flex-col items-center gap-3">
            <p className="text-sm leading-5 tracking-[-0.08px] text-heading">
              Join over <span className="font-bold">2M</span> global content
              creators 🥳
            </p>
            <Image
              src={avatarGroupImage}
              height={32}
              width={176}
              alt="users avatar group image"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPlans;
