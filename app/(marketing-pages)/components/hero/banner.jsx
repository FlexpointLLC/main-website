const Banner = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-7 px-4 text-center md:mx-auto md:max-w-xl">
      <h1 className="text-5xl font-semibold text-heading md:text-6xl">
        The All-in-one Creator Platform.
      </h1>

      <p className="text-para">
        The easiest way to make money online. All of your courses, digital
        products, and bookings are now hosted within your link-in-bio.
      </p>

      <div>
        <p className="text-sm text-heading">
          Join over <span className="font-bold">2M</span> global content
          creators 🥳
        </p>
      </div>
    </div>
  );
};

export default Banner;
