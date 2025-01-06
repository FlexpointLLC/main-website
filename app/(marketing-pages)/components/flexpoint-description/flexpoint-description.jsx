"use client";

import { useEffect, useRef } from "react";
import { ScrollTrigger, gsap } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const FlexpointDescription = () => {
  const sectionRef = useRef();
  const headingRef = useRef();
  const paragraphRef = useRef();

  useEffect(() => {
    const targets = gsap.utils.toArray([
      headingRef.current,
      paragraphRef.current,
    ]);

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
    <section
      ref={sectionRef}
      className="section bg-gradient-to-b from-white to-[#F0FAFA]"
    >
      <div className="w-full space-y-[10px] px-4 py-20 pt-0 text-center md:mx-auto md:max-w-4xl md:pb-[148px] md:pt-[22px]">
        <h2
          ref={headingRef}
          className="font-semibold leading-6 tracking-[-0.18px] text-success-base"
        >
          What is flexpoint?
        </h2>
        <p
          ref={paragraphRef}
          className="text-4xl font-semibold text-heading md:text-5xl md:leading-[58px]"
        >
          We get it.{" "}
          <span className="text-[#99A0AE]">
            Making money as a creator is tough, and standing out is expensive.
          </span>{" "}
          That’s where Flexpoint helps you thrive—without breaking the bank.
        </p>
      </div>
    </section>
  );
};

export default FlexpointDescription;
