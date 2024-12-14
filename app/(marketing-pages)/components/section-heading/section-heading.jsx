const SectionHeading = ({ headingShortText, headingLongText, headingPara }) => {
  return (
    <header className="mx-auto mb-5 w-full px-4 text-center md:mb-16 md:max-w-3xl md:px-8">
      {headingShortText ? (
        <h2 className="mb-2 font-semibold text-success-base">
          {headingShortText}
        </h2>
      ) : null}
      {headingLongText ? (
        <h3 className="mb-4 text-4xl font-medium text-heading md:text-5xl">
          {headingLongText}
        </h3>
      ) : null}
      {headingPara ? <p className="text-para">{headingPara}</p> : null}
    </header>
  );
};

export default SectionHeading;
