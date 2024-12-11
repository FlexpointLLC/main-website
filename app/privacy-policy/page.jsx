import Link from "next/link";

export const metadata = {
  title: "Flexpoint - Privacy Policy",
  description: "Privacy Policy of Flexpoint",
};

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-primary-from-top pt-28">
      <article className="mx-auto max-w-3xl px-6 text-para">
        <h1 className="mb-8 text-4xl font-semibold uppercase text-heading md:text-5xl lg:text-6xl">
          Privacy and Policy
        </h1>

        <section className="border-fl-border/5 border-b pb-9">
          <div className="flex flex-col gap-8">
            <p>
              Welcome to Flexpoint (&quot;we&quot;, &quot;our,&quot; or
              &quot;us&quot;). Your privacy is critically important to us. This
              Privacy Policy explains the personal information we collect from
              creators (&quot;Creators&quot;), customers, and other site
              visitors and service users (collectively, &quot;you&quot;), how we
              use and share that information, and your choices concerning our
              information practices. This Privacy Policy is incorporated into
              and forms part of our Terms of Service.
            </p>

            <p>
              Before using the service or submitting any personal information to
              Flexpoint, please review this Privacy Policy carefully and contact
              us if you have any questions. By using the service, you agree to
              the practices described in this Privacy Policy. If you do not
              agree to this Privacy Policy, please do not access the site or
              otherwise use the service.
            </p>

            <p>
              In addition, when using certain services, you will be subject to
              any additional terms applicable to such services that may be
              posted on the Service from time to time, including, without
              limitation, the Privacy Policy. All such terms are hereby
              incorporated by reference into these Terms of Service.
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-8 py-9">
          <div className="space-y-3">
            <h4 className="text-lg font-semibold">
              <span>1.</span>Information We Collect
            </h4>
            <h5 className="font-semibold">
              <span>1.1</span>Information You Provide to Us:
            </h5>
            <ul className="ml-6 list-disc space-y-1">
              <li>
                <span className="font-medium">
                  Identification Information:{" "}
                </span>
                We collect your name, email address, phone number, address,
                profile photo, and, for Creators, tax identification number. We
                may also collect any additional information you provide to us
                when you create an account or use the services.
              </li>

              <li>
                <span className="font-medium">Financial Information:</span> Our
                payment processor Stripe, Inc. (&quot;Stripe&quot;) collects the
                financial information necessary to process payments through the
                service. Your financial data is processed according to Stripe’s
                services agreement and privacy policy.
              </li>

              <li>
                <span className="font-medium">Communication Information:</span>{" "}
                We collect information when you contact us with questions or
                concerns and when you respond to questionnaires, surveys, or
                market research. Providing communication data is optional.
              </li>

              <li>
                <span className="font-medium">Commercial Information:</span> We
                may retain a history of the Creator Content you browse, make
                available, or purchase using the service.
              </li>

              <li>
                <span className="font-medium">Demographic Information:</span> We
                collect your age and gender.
              </li>

              <li>
                <span className="font-medium">Social Media Information:</span>{" "}
                When you interact with our pages on social media platforms like
                Instagram, Facebook, YouTube, and TikTok, we may collect
                personal information you elect to share through your settings.
              </li>
            </ul>

            <h5 className="font-semibold">
              <span>1.2</span>Information We Automatically Collect
            </h5>

            <ul className="ml-6 list-disc space-y-1">
              <li>
                <span className="font-medium">
                  Internet Activity Information:
                </span>{" "}
                Includes IP address, browser type, and navigation patterns when
                you visit or interact with the service.
              </li>

              <li>
                <span className="font-medium">Cookies Information:</span> See
                the “Cookies Policy” section below.
              </li>

              <li>
                <span className="font-medium">Device Information:</span>{" "}
                Includes the name of the device, operating system, and browser
                you use
              </li>

              <li>
                <span className="font-medium">Usage Information:</span> Covers
                the types of content you view, features you use, and time spent
                on activities.
              </li>

              <li>
                <span className="font-medium">Location Information:</span>{" "}
                Derived from your IP address.
              </li>

              <li>
                <span className="font-medium">
                  Email Open/Click Information:
                </span>{" "}
                Data collected through email campaign pixels.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-lg font-semibold">
              <span>2.</span>How We Use Your Information
            </h4>
            <h5 className="font-medium">
              We may use your personal information to:
            </h5>
            <ul className="ml-6 list-disc space-y-1">
              <li>Provide and maintain the services.</li>

              <li>Respond to inquiries and feedback</li>

              <li>Communicate updates and changes to our policies.</li>

              <li>Improve the service based on user interaction.</li>

              <li>Develop new products and services.</li>

              <li>Ensure security and prevent misuse of the platform.</li>

              <li>Comply with legal obligations.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4>
              <span className="text-lg font-semibold">3.</span>How We Share Your
              Information
            </h4>
            <ul className="ml-6 list-disc space-y-1">
              <li>
                <span className="font-medium">
                  Vendors and Service Providers:
                </span>{" "}
                Sharing information with third-party services like hosting
                providers, analytics platforms, and payment processors.
              </li>

              <li>
                <span className="font-medium">Business Transfers:</span> Sharing
                information during mergers, acquisitions, or reorganizations.
              </li>

              <li>
                <span className="font-medium">Legal Requirements:</span>{" "}
                Compliance with laws or legal obligations
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-lg font-semibold">
              <span>4.</span>Children&apos;s Privacy
            </h4>
            <p>
              Flexpoint is not directed at children under the age of 13. If we
              discover such data, we will delete it promptly.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-lg font-semibold">
              <span>5.</span>Cookies Policy
            </h4>
            <p>
              Cookies are used for site operation and improvement. You can
              manage cookies through your browser settings, but this may affect
              service functionality.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-lg font-semibold">
              <span>6.</span>Data Security
            </h4>
            <p>
              We use commercially reasonable measures to protect your data but
              cannot guarantee complete security.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-lg font-semibold">
              <span>7.</span>Changes to This Privacy Policy
            </h4>
            <p>
              We may update this Privacy Policy. Changes will be reflected with
              an updated &quot;Last Updated&quot; date. Continued use signifies
              agreement.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">
              <span className="mb-3">8.</span>Contact Us
            </h4>
            <p className="mb-6">
              <span className="font-medium">Email: </span>{" "}
              <Link
                className="text-[#335CFF]"
                href="mailto:info@flexpoint.store"
              >
                info@flexpoint.store
              </Link>
            </p>
            <p>Thank you for trusting Flexpoint!</p>
          </div>
        </section>
      </article>
    </div>
  );
};

export default PrivacyPolicyPage;
