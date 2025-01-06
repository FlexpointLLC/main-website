import SectionHeading from "../section-heading/section-heading";
import { AccordionDemo } from "./accordion";

export default function FAQs() {
  return (
    <div className="bg-[#F3F7FB] py-36">
      <SectionHeading
        headingLongText="Your Questions, Answered"
        headingShortText="Frequently Asked Questions"
        headingPara="Explore the most common questions about Flexpoint. From features to payment options, this section provides everything you need to maximize your experience with our platform."
        extraClassNames={"md:mb-10"}
      />

      <div className="mx-auto max-w-[564px]">
        <AccordionDemo />
      </div>
    </div>
  );
}
