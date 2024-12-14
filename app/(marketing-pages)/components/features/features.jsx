import BuildCommunityImg from "@/public/assets/img/build-community.svg";
import ExclusiveServiceImg from "@/public/assets/img/exclusive-service.svg";
import MonetizeDigitalContentImg from "@/public/assets/img/monetize-digital-content.svg";
import PaidCallAndHostEventImg from "@/public/assets/img/paid-call-and-host-event.svg";
import PromoteLinkImg from "@/public/assets/img/promote-link.svg";

import FeatureCard from "./feature-card";
import SectionHeading from "../section-heading/section-heading";

const features = [
  {
    id: "1",
    subTitle: "Coaches & Mentors",
    title: "Book Paid Calls & Host Events",
    shortDes:
      "Offer paid one-on-one coaching or group events and start earning immediately.",
    backgroundColor: "#ECF8F8",
    borderColor: "#D5F1F1",
    iconColor: "#37C390",
    list: [
      "Seamless scheduling and integrated payments for calls",
      "Offer discovery calls or full coaching sessions",
      "Customizable booking pages to match your brand",
      "Receive instant notifications for bookings and payments",
    ],
    imgPosition: "RIGHT",
    image: PaidCallAndHostEventImg,
  },
  {
    id: "2",
    subTitle: "Digital Creators & Educators",
    title: "Monetize Digital Content",
    shortDes:
      "Sell your guides, templates, eBooks, or exclusive content effortlessly.",
    backgroundColor: "#DFEAFF",
    iconColor: "#375DFB",
    list: [
      "Upload and sell digital products in minutes",
      "Secure and automatic delivery of content",
      "Integrated payment processing",
      "Track your sales and engagement easily",
    ],
    imgPosition: "LEFT",
    image: MonetizeDigitalContentImg,
  },
  {
    id: "3",
    subTitle: "Community Builders",
    title: "Engage & Build Community",
    shortDes: "Create and monetize free or paid communities with ease.",
    backgroundColor: "#F3EEFC",
    iconColor: "#6E3FF3",
    list: [
      "Host exclusive communities for your audience",
      "Manage memberships and payments seamlessly",
      "Create custom content and events for your community",
      "Keep your audience engaged and connected",
    ],
    imgPosition: "RIGHT",
    image: BuildCommunityImg,
  },
  {
    id: "4",
    subTitle: "Freelancers & Service Providers",
    title: "Offer Exclusive Services",
    shortDes:
      "Sell your expertise directly to your audience and get paid instantly.",
    backgroundColor: "#FCF5E9",
    iconColor: "#F1A62D",
    list: [
      "Create personalized service offerings",
      "Built-in invoicing and instant payment processing",
      "Manage service requests and client information easily",
      "Showcase your skills with a custom service page",
    ],
    imgPosition: "LEFT",
    image: ExclusiveServiceImg,
  },
  {
    id: "5",
    subTitle: "Influencers & Affiliate Marketers",
    title: "Promote & Earn with Affiliate Links",
    shortDes:
      "Share affiliate products or services and generate income passively.",
    backgroundColor: "#F2F2F2",
    iconColor: "#383838",
    list: [
      "Add affiliate links easily to your pages",
      "Earn commissions on every referral",
      "Track your earnings and clicks in real-time",
      "Promote products you believe in to your audience",
    ],
    imgPosition: "RIGHT",
    image: PromoteLinkImg,
  },
];

const Features = () => {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-5xl px-4 pb-24 pt-16 md:pt-32">
        <SectionHeading
          headingLongText="Not just another link·in·bio🚀"
          headingShortText="What you will get?"
          headingPara="Flexpoint has everything you need to run your business. All-in-one place."
        />

        <div className="gap- flex flex-col gap-10">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Features;
