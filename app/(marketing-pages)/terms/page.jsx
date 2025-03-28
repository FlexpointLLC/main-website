import Link from "next/link";

export const metadata = {
  title: "Flexpoint - Terms",
  description:
    "Learn about Flexpoint’s Terms of Service, including account guidelines, service policies, intellectual property rights, and arbitration details.",
};

const TermsPage = () => {
  return (
    <div className="relative -top-16 min-h-screen bg-gradient-primary-from-top pt-14 md:pt-16">
      <article className="mx-auto mt-16 max-w-3xl px-6 text-para">
        <h1 className="mb-8 text-4xl font-semibold text-heading md:text-5xl lg:text-6xl">
          TERMS OF SERVICE
        </h1>

        <section className="border-b border-fl-border/5 pb-9">
          <h3 className="mb-3">Welcome to Flexpoint!</h3>
          <div className="flex flex-col gap-8">
            <p>
              Flexpoint LLC (“Flexpoint,” “we,” “us,” “our”) provides its services through its website located at{' '}
              <Link href="https://flexpoint.store/" target="_blank" className="underline">
                flexpoint.store
              </Link>{' '} and related services (collectively, such services, including any new features and applications, and the Site, the “Service(s)”).
            </p>
            <p>
              Flexpoint LLC is a Delaware Limited Liability Company registered at 131 Continental Dr, Suite 305, Newark, DE 19713, USA. Our operational office is located at Anwer Hossain House, Noakhali Mouza, Noakhali 3804, Bangladesh.
            </p>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be posted on this page and communicated by reasonable means. Continued use of the Services after changes become effective constitutes your acceptance.
            </p>
            <p className="font-medium">
              PLEASE READ THESE TERMS CAREFULLY. THEY CONTAIN AN ARBITRATION CLAUSE THAT REQUIRES YOU TO RESOLVE DISPUTES BY BINDING ARBITRATION AND LIMITS YOUR LEGAL REMEDIES.
            </p>
          </div>
        </section>

        <section className="border-b border-fl-border/5 py-9">
          <h3 className="mb-3 text-lg font-semibold">About Flexpoint</h3>
          <div className="flex flex-col gap-8">
            <p>
              Flexpoint is a creator commerce platform enabling creators (“Creators”) to monetize digital goods, services, coaching, events, affiliate links, and memberships. Flexpoint also provides analytics, coaching, and affiliate management tools.
            </p>
            <p>
              Flexpoint acts solely as a facilitator between Creators and their Customers. Flexpoint is not a party to any transaction between Creators and Customers.
            </p>
          </div>
        </section>

        <section className="border-b border-fl-border/5 py-9">
          <h3 className="mb-3 text-lg font-semibold">Legal Documents</h3>
          <div className="flex flex-col gap-8">
            <p>By using Flexpoint, you also agree to:</p>
            <ul className="list-disc ml-4">
              <li><Link href="https://flexpoint.store/privacy" target="_blank" className="underline">Privacy Policy</Link></li>
              <li><Link href="https://flexpoint.store/pricing" target="_blank" className="underline">Pricing Page</Link></li>
            </ul>
          </div>
        </section>

        <section className="border-b border-fl-border/5 py-9">
          <h3 className="mb-3 text-lg font-semibold">Refunds & Cancellation</h3>
          <div className="flex flex-col gap-8">
            <p>
              Flexpoint operates as a creator platform and does not directly sell creator content. Refunds are handled as follows:
            </p>
            <ul className="list-disc ml-4">
              <li>For platform service fees: Refund requests must be submitted within 14 days of purchase by contacting info@flexpoint.store.</li>
              <li>For creator-related purchases: Customers must contact the Creator directly. Flexpoint may, at its sole discretion, assist with disputes if contacted within 14 days.</li>
              <li>Refunds are not available for completed coaching calls, delivered digital goods, or services already rendered.</li>
            </ul>
            <p>
              Payments on Flexpoint are processed through third-party processors including Paddle and other approved providers.
            </p>
          </div>
        </section>

        <section className="border-b border-fl-border/5 py-9">
          <h3 className="mb-3 text-lg font-semibold">Mobile Services</h3>
          <div className="flex flex-col gap-8">
            <p>
              The Service includes features accessible via mobile devices, including:
            </p>
            <ol className="ml-2 list-inside list-[upper-roman]">
              <li>Uploading content via mobile devices.</li>
              <li>Browsing the Service via mobile browsers.</li>
              <li>Using mobile applications (if provided).</li>
            </ol>
            <p>
              Standard carrier rates may apply. Flexpoint is not responsible for any limitations imposed by your mobile carrier.
            </p>
          </div>
        </section>

        <section className="border-b border-fl-border/5 py-9">
          <h3 className="mb-3 text-lg font-semibold">Conditions of Use</h3>
          <div className="flex flex-col gap-8">
            <p>
              <span className="font-semibold">User Conduct:</span> You agree not to:
            </p>
            <ul className="ml-2 list-inside list-disc">
              <li>Upload infringing, harmful, or unlawful content.</li>
              <li>Misuse the Service for spam or fraud.</li>
              <li>Collect personal data without consent.</li>
              <li>Engage in any activity violating applicable laws.</li>
            </ul>

            <p>
              <span className="font-semibold">Anti-Spam Compliance:</span> You agree to comply with the U.S. CAN-SPAM Act, CASL, and applicable laws when sending communications through Flexpoint.
            </p>

            <p>
              <span className="font-semibold">Licensing:</span> Creators are solely responsible for obtaining all required licenses or permits for their Creator Content.
            </p>
          </div>
        </section>

        <section className="border-b border-fl-border/5 py-9">
          <h3 className="mb-3 text-lg font-semibold">Pricing & Payments</h3>
          <div className="flex flex-col gap-8">
            <p>
              Pricing information is available at{' '}
              <Link href="https://flexpoint.store/pricing" target="_blank" className="underline">
                flexpoint.store/pricing
              </Link>. Payments are processed securely through Paddle and other approved providers.
            </p>
            <p>
              You agree to pay all fees according to your selected plan and the billing cycle presented at checkout.
            </p>
          </div>
        </section>

        <section className="border-b border-fl-border/5 py-9">
          <h3 className="mb-3 text-lg font-semibold">Intellectual Property</h3>
          <div className="flex flex-col gap-8">
            <p>All Flexpoint content, software, and trademarks are owned by Flexpoint LLC or its licensors. Users may not copy, distribute, or create derivative works without permission.</p>
            <p>You grant Flexpoint a non-exclusive license to use and display content you upload as necessary to operate the Services.</p>
          </div>
        </section>

        <section className="border-b border-fl-border/5 py-9">
          <h3 className="mb-3 text-lg font-semibold">Disclaimers and Limitations</h3>
          <div className="flex flex-col gap-8">
            <p>Flexpoint provides the Services “AS IS” without warranties of any kind.</p>
            <p>Flexpoint’s total liability for claims shall not exceed the fees paid by you in the last 6 months.</p>
          </div>
        </section>

        <section className="border-b border-fl-border/5 py-9">
          <h3 className="mb-3 text-lg font-semibold">Dispute Resolution</h3>
          <div className="flex flex-col gap-8">
            <p>All disputes will be resolved by binding arbitration under Delaware law. You waive the right to participate in class actions or jury trials.</p>
          </div>
        </section>

        <section className="border-b border-fl-border/5 py-9">
          <h3 className="mb-3 text-lg font-semibold">Termination</h3>
          <div className="flex flex-col gap-8">
            <p>Flexpoint may terminate or suspend your access if you violate these Terms or applicable laws.</p>
          </div>
        </section>

        <section className="py-9">
          <h3 className="mb-3 text-lg font-semibold">Contact Information</h3>
          <p className="mb-2 font-semibold">
            Flexpoint LLC, 131 Continental Dr, Suite 305, Newark, DE 19713, USA
          </p>
          <p className="mb-2 font-semibold">
            Operational Office: Anwer Hossain House, Noakhali Mouza, Noakhali 3804, Bangladesh
          </p>
          <p>
            Email: info@flexpoint.store
          </p>
        </section>
      </article>

    </div>
  );
};

export default TermsPage;
