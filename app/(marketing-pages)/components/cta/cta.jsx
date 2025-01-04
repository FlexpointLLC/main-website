import { Button } from "@/components/ui/button";
import Link from "next/link";

const CTA = () => {
  return (
    <div className="bg-white">
      <section className="appear-animation mx-auto max-w-5xl rounded-2xl border border-[#D5F1F1] bg-gradient-to-b from-[#ECF8F8] to-[#F9FDFD] py-16 md:py-24">
        <div className="w-full text-center md:mx-auto md:max-w-xl">
          <h2 className="mb-[10px] font-semibold text-success-base">
            Ready to get started?
          </h2>

          <div className="space-y-6">
            <p className="text-4xl font-semibold leading-[58px] text-heading md:text-5xl">
              Start your 14-day free trial today
            </p>
            <p className="leading-6 tracking-[-0.18px] text-para">
              — No strings attached. Cancel anytime if it’s not the right fit
              for you.
            </p>
          </div>

          <div className="mt-6 flex w-full justify-center">
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
        </div>
      </section>
    </div>
  );
};

export default CTA;
