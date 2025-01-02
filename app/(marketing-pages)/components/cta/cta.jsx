const CTA = () => {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-5xl rounded-2xl bg-gradient-primary-from-top px-4 pb-24 pt-16 md:pt-32">
        <div className="w-full py-32 text-center md:mx-auto md:max-w-xl md:py-24">
          <h2 className="mb mb-3 font-semibold text-success-base">
            Ready to get started?
          </h2>

          <div className="space-y-6">
            <p className="text-4xl font-semibold text-heading md:text-5xl">
              Start your 14-day free trial today
            </p>
            <p className="text-para">
              — No strings attached. Cancel anytime if it’s not the right fit
              for you.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTA;
