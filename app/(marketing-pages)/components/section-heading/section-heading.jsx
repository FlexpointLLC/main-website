import { cn } from "@/lib/utils";

const SectionHeading = ({
  headingShortText,
  headingLongText,
  headingPara,
  extraClassNames,
}) => {
  return (
    <header
      className={cn(
        "mx-auto mb-5 w-full px-4 text-center md:mb-16 md:max-w-3xl md:px-8",
        extraClassNames,
      )}
    >
      {headingShortText ? (
        <h2 className="mb-2 font-semibold leading-6 tracking-[-0.18px] text-success-base">
          {headingShortText}
        </h2>
      ) : null}
      {headingLongText ? (
        <h3 className="mb-4 text-4xl font-medium text-heading md:text-5xl md:leading-[58px]">
          {headingLongText}
        </h3>
      ) : null}
      {headingPara ? (
        <p className="leading-6 tracking-[-0.18px] text-para">{headingPara}</p>
      ) : null}
    </header>
  );
};

export default SectionHeading;
