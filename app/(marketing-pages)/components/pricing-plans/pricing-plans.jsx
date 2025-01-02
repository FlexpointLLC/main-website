import SectionHeading from "../section-heading/section-heading";
import TotalPricingCard from "./total-pricing-card";

const PricingPlans = () => {
  return (
    <div className="bg-gradient-primary-from-top">
      <section className="mx-auto w-full px-4 py-20 md:max-w-3xl">
        <SectionHeading
          headingLongText="Flexpoint vs Other Tools"
          headingShortText="What you will get?"
          headingPara="See how Flexpoint brings together 5+ services in one, helping you save big."
        />

        <TotalPricingCard />
      </section>
    </div>
  );
};

export default PricingPlans;
