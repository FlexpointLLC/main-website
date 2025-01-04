"use client";

import Image from "next/image";
import lineVector from "@/public/assets/img/line-vector.svg";
import Marque from "./marque";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import avatarGroupImage from "@/public/assets/img/hero-avatar-group.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";

const Hero = () => {
  const sectionRef = useRef();
  const badgeRef = useRef();
  const headingRef = useRef();
  const paragraphRef = useRef();
  const buttonRef = useRef();
  const imageRef = useRef();

  const timeline = gsap.timeline({ paused: true });

  useGSAP(
    () => {
      const targets = gsap.utils.toArray([
        badgeRef.current,
        headingRef.current,
        paragraphRef.current,
        buttonRef.current,
        imageRef.current,
      ]);
      gsap.fromTo(
        targets,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.2 },
      );
      timeline.add(gsap.to(sectionRef.current, { opacity: 0 }));
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="via-36% relative -top-[210px] flex flex-col items-center overflow-hidden bg-gradient-to-b from-[#CAE7FF] via-[#E1F2FE] to-white pt-[258px] md:pt-[295px]"
    >
      <Image
        src={lineVector}
        width={1667}
        height={690}
        alt="decorative line vector"
        className="absolute top-0"
      />

      {/* badge */}
      <div
        ref={badgeRef}
        className="relative z-10 mb-6 flex items-center gap-2 rounded-full bg-white/40 py-2 pl-[10px] pr-[26px] text-sm font-medium leading-5 tracking-[-0.08%] text-heading backdrop-blur-2xl"
      >
        <span className="rounded-full bg-white px-2 py-1">Introducing</span>
        <span>Your all in one store</span>
      </div>

      {/* banner */}
      <div className="relative z-10 flex w-full flex-col items-center justify-center gap-7 px-4 pb-24 text-center md:mx-auto md:max-w-xl md:pb-44">
        <h1
          ref={headingRef}
          className="text-5xl font-semibold text-heading md:text-[64px]"
        >
          The All-in-one Creator Platform.
        </h1>

        <p
          ref={paragraphRef}
          className="leading-6 tracking-[-0.18px] text-para"
        >
          The easiest way to make money online. All of your courses, digital
          products, and bookings are now hosted within your link-in-bio.
        </p>

        <div ref={buttonRef}>
          <Button
            className={"h-fit rounded-2xl text-lg font-semibold leading-6"}
          >
            <Link
              href="https://dev-admin.flexpoint.store/register"
              target="_blank"
              className="flex items-center gap-2 px-7 py-4 hover:gap-3"
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
            </Link>
          </Button>
        </div>

        <div ref={imageRef} className="flex flex-col items-center gap-3">
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
      <Marque />
      {/* <Advertisement /> */}
    </section>
  );
};

export default Hero;
