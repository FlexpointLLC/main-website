import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const accordionContents = [
  {
    id: 1,
    heading: "What is Flexpoint?",
    paragraph:
      "Flexpoint is an all-in-one platform for creators to sell products, manage communities, host events, and receive payments seamlessly.",
  },
  {
    id: 2,
    heading: "Who is Flexpoint for?",
    paragraph:
      "Flexpoint is ideal for creators, coaches, service providers, and entrepreneurs looking to streamline their business operations.",
  },
  {
    id: 3,
    heading: "What payment methods does Flexpoint support?",
    paragraph:
      "Flexpoint supports all payment types provided by Stripe. Users can withdraw their earnings via Stripe, Wise, or directly to their local bank accounts.",
  },
  {
    id: 4,
    heading: "Does Flexpoint charge transaction fees or take commissions?",
    paragraph:
      "No. Flexpoint does not charge any transaction fees or take commissions. We believe your earnings are yours to keep.",
  },
  {
    id: 5,
    heading: "Does Flexpoint handle multi-currency transactions?",
    paragraph:
      "Absolutely! Users can get paid in USD using Stripe, and it's all secure and encrypted.",
  },
  {
    id: 6,
    heading: "Is Flexpoint secure?",
    paragraph:
      "Flexpoint adheres to PCI compliance standards, uses advanced encryption, and offers passwordless authentication for maximum security.",
  },
  {
    id: 7,
    heading: "Can I integrate other tools with Flexpoint?",
    paragraph:
      "Yes, Flexpoint integrates with Stripe, Wise, Google Calendar, Zoom, and Zapier, among other tools. These integrations help simplify payment processes, streamline scheduling, and automate workflows.",
  },
  {
    id: 8,
    heading: "How much does Flexpoint cost?",
    paragraph:
      "Plans start at $27/month or $300/year, with savings on the yearly subscription.",
  },
];

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full space-y-2">
      {accordionContents.map((accordion) => (
        <AccordionItem
          key={accordion.id}
          value={`item-${accordion.id}`}
          //   value="item-1"
          className="rounded-[14px] border-none bg-white px-5 py-4"
        >
          <AccordionTrigger className="py-0 text-base font-medium leading-6 tracking-[-0.18px] hover:no-underline">
            {accordion.heading}
          </AccordionTrigger>
          <AccordionContent className="mb-1 mt-3 rounded-xl bg-[#f5f7fa] px-4 pb-8 pt-4 text-base leading-6 tracking-[-0.18px]">
            {accordion.paragraph}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
