import { Suspense } from "react";
import CTA from "./components/cta/cta";
import Features from "./components/features/features";
import FlexpointDescription from "./components/flexpoint-description/flexpoint-description";
import HowItWorks from "./components/how-it-works/how-it-works";
import Hero from "./components/hero/hero";
import PricingPlans from "./components/pricing-plans/pricing-plans";
import FAQs from "./components/faqs/faqs";

export const metadata = {
  title: "Flexpoint - Home",
  description:
    "Stay tuned! Flexpoint is launching soon with innovative solutions to empower creators and elevate their digital businesses.",
  openGraph: {
    images: [
      {
        url: "https://i.ibb.co.com/bz1qnHV/Flexpoint.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "OG image of Flexpoint",
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-210px)]">
      <Suspense fallback={<div className="h-[600px]" />}>
        <Hero />
      </Suspense>
      <FlexpointDescription />
      <Features />
      <Suspense fallback={<div className="h-[400px]" />}>
        <PricingPlans />
      </Suspense>
      <HowItWorks />
      <FAQs />
      <CTA />
    </div>
  );
}
