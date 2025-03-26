"use client";

import Image from "next/image";
import advancedLinkInBioIcons from "@/public/assets/icon/advanced-link-in-bio-icons.svg";
import audienceAnalyticsIcons from "@/public/assets/icon/audience-analytics-icons.svg";
import calendarInvitesAndBookingsIcons from "@/public/assets/icon/calendar-invites-&-bookings-icons.svg";
import engageAndBuildCommunityToolIcons from "@/public/assets/icon/engage-and-build-community-tool-icons.svg";
import monetizeDigitalContentIcons from "@/public/assets/icon/monetize-digital-content-icons.svg";
import paidStrategyCoachingIcons from "@/public/assets/icon/paid-strategy-coaching-icons.svg";

import { useEffect, useRef } from "react";
import { ScrollTrigger, gsap } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const toolsData = [
  {
    id: 1,
    title: "Advanced “Link-in-Bio”",
    subtitle: "Replace Shopify, Linktree",
    price: 48,
    image: advancedLinkInBioIcons,
  },
  {
    id: 2,
    title: "Calendar Invites & Bookings",
    subtitle: "Replace Calendly, Scheduling App",
    price: 35,
    image: calendarInvitesAndBookingsIcons,
  },
  {
    id: 3,
    title: "Audience Analytics",
    subtitle: "Replace Google Analytics, Mixpanel",
    price: 89,
    image: audienceAnalyticsIcons,
  },
  {
    id: 4,
    title: "1:1 Paid Strategy Coaching",
    subtitle: "Replace Cal.com , Nas.io",
    price: 20,
    image: paidStrategyCoachingIcons,
  },
  {
    id: 5,
    title: "Monetize Digital Content",
    subtitle: "Replace Patreon, Gumroad",
    price: 10,
    image: monetizeDigitalContentIcons,
  },
  {
    id: 6,
    title: "Engage & Build Community",
    subtitle: "Replace Substack, Memberful",
    price: 25,
    image: engageAndBuildCommunityToolIcons,
  },
];

export default function ToolsCard() {
  const sectionRef = useRef();

  useEffect(() => {
    const targets = gsap.utils.toArray([sectionRef.current]);

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.fromTo(
          targets,
          { opacity: 0, y: 30, delay: 0.8 },
          { opacity: 1, y: 0, delay: 0.8, stagger: 0.2 },
        );
      },
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      className="mb-4 w-full rounded-2xl bg-white shadow-sm"
    >
      <div className="border-b border-black/5 px-6 py-4">
        <p className="text-lg font-medium leading-6 tracking-[-0.01em]">
          What other tools will cost you
        </p>
      </div>

      <div>
        <ul>
          {toolsData.map((tool) => (
            <li
              key={tool.id}
              className="flex items-center justify-between gap-10 border-b border-black/5 p-4 md:gap-0 md:px-6 md:py-4"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={tool.image}
                  width={48}
                  height={48}
                  alt={`${tool.title} icons`}
                />

                <div className="flex flex-col md:gap-1">
                  <h4 className="font-medium tracking-[-0.01em] text-heading">
                    {tool.title}
                  </h4>
                  <p className="text-sm leading-5 tracking-[-0.08%] text-para">
                    {tool.subtitle}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-base font-medium text-para md:text-xl">
                  ${tool.price}
                </p>
              </div>
            </li>
          ))}

          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              <svg
                width="52"
                height="40"
                viewBox="0 0 52 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-[44px]"
              >
                <path
                  d="M31.8844 15.8844L27.7672 20L31.8844 24.1156C32.0005 24.2318 32.0926 24.3696 32.1555 24.5214C32.2184 24.6731 32.2507 24.8358 32.2507 25C32.2507 25.1642 32.2184 25.3269 32.1555 25.4786C32.0926 25.6304 32.0005 25.7682 31.8844 25.8844C31.7682 26.0005 31.6304 26.0926 31.4786 26.1555C31.3269 26.2183 31.1643 26.2507 31 26.2507C30.8358 26.2507 30.6731 26.2183 30.5214 26.1555C30.3696 26.0926 30.2318 26.0005 30.1156 25.8844L26 21.7672L21.8844 25.8844C21.7682 26.0005 21.6304 26.0926 21.4786 26.1555C21.3269 26.2183 21.1643 26.2507 21 26.2507C20.8358 26.2507 20.6731 26.2183 20.5214 26.1555C20.3696 26.0926 20.2318 26.0005 20.1156 25.8844C19.9995 25.7682 19.9074 25.6304 19.8445 25.4786C19.7817 25.3269 19.7493 25.1642 19.7493 25C19.7493 24.8358 19.7817 24.6731 19.8445 24.5214C19.9074 24.3696 19.9995 24.2318 20.1156 24.1156L24.2328 20L20.1156 15.8844C19.8811 15.6498 19.7493 15.3317 19.7493 15C19.7493 14.6683 19.8811 14.3502 20.1156 14.1156C20.3502 13.8811 20.6683 13.7493 21 13.7493C21.3317 13.7493 21.6498 13.8811 21.8844 14.1156L26 18.2328L30.1156 14.1156C30.2318 13.9995 30.3696 13.9074 30.5214 13.8445C30.6731 13.7817 30.8358 13.7493 31 13.7493C31.1643 13.7493 31.3269 13.7817 31.4786 13.8445C31.6304 13.9074 31.7682 13.9995 31.8844 14.1156C32.0005 14.2318 32.0926 14.3696 32.1555 14.5214C32.2184 14.6731 32.2507 14.8358 32.2507 15C32.2507 15.1642 32.2184 15.3269 32.1555 15.4786C32.0926 15.6304 32.0005 15.7682 31.8844 15.8844ZM42.25 20C42.25 23.2139 41.297 26.3557 39.5114 29.028C37.7258 31.7003 35.1879 33.7831 32.2186 35.013C29.2493 36.243 25.982 36.5648 22.8298 35.9378C19.6776 35.3108 16.7821 33.7631 14.5095 31.4905C12.2369 29.2179 10.6893 26.3224 10.0622 23.1702C9.43524 20.018 9.75704 16.7507 10.987 13.7814C12.2169 10.8121 14.2997 8.27419 16.972 6.48862C19.6443 4.70305 22.7861 3.75 26 3.75C30.3084 3.75455 34.439 5.46806 37.4855 8.51454C40.5319 11.561 42.2455 15.6916 42.25 20ZM39.75 20C39.75 17.2805 38.9436 14.6221 37.4327 12.3609C35.9218 10.0997 33.7744 8.33736 31.2619 7.29666C28.7494 6.25595 25.9848 5.98366 23.3175 6.5142C20.6503 7.04475 18.2003 8.35431 16.2773 10.2773C14.3543 12.2003 13.0448 14.6503 12.5142 17.3175C11.9837 19.9847 12.256 22.7494 13.2967 25.2619C14.3374 27.7744 16.0997 29.9218 18.3609 31.4327C20.6221 32.9436 23.2805 33.75 26 33.75C29.6455 33.7459 33.1404 32.2959 35.7182 29.7182C38.2959 27.1404 39.7459 23.6455 39.75 20Z"
                  fill="#FB3748"
                />
              </svg>

              <p className="text-sm font-semibold text-para md:text-lg">
                Your Total Monthly Costs
              </p>
            </div>

            <div>
              <p className="text-base font-semibold text-[#fb3848] line-through md:text-xl">
                $227/m
              </p>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}
