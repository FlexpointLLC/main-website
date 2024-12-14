import SectionHeading from "../section-heading/section-heading";

const workingStrategies = [{ id: "1" }, { id: "2" }, { id: "3" }];

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
              className="rounded-2xl border border-[#E1E4EA]"
            >
              <div className="h-40"></div>
              <figure></figure>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
