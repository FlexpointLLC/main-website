"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { ScrollTrigger, gsap } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const SectionHeading = ({
  headingShortText,
  headingLongText,
  headingPara,
  extraClassNames,
}) => {
  const headerRef = useRef();
  const shortTextRef = useRef();
  const longTextRef = useRef();
  const paragraphRef = useRef();

  useEffect(() => {
    const targets = gsap.utils.toArray([
      shortTextRef.current,
      longTextRef.current,
      paragraphRef.current,
    ]);

    ScrollTrigger.create({
      trigger: headerRef.current,
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
    <header
      ref={headerRef}
      className={cn(
        "mx-auto mb-5 w-full px-4 text-center md:mb-16 md:max-w-3xl md:px-8",
        extraClassNames,
      )}
    >
      {headingShortText ? (
        <h2
          ref={shortTextRef}
          className="mb-2 font-semibold leading-6 tracking-[-0.18px] text-success-base"
        >
          {headingShortText}
        </h2>
      ) : null}
      {headingLongText ? (
        <h3
          ref={longTextRef}
          className="mb-4 text-4xl font-medium text-heading md:text-5xl md:leading-[58px]"
        >
          {headingLongText}
        </h3>
      ) : null}
      {headingPara ? (
        <p
          ref={paragraphRef}
          className="leading-6 tracking-[-0.18px] text-para"
        >
          {headingPara}
        </p>
      ) : null}
    </header>
  );
};

export default SectionHeading;
