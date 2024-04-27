import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Step 1",
    description:
       "Fill up the enquiry form",
    link: "https://stripe.com",
  },
  {
    title: "Step 2",
    description:
      "Submit the Application form at our office with the relevant documents.",
    link: "https://netflix.com",
  },
  {
    title: "Step 3",
    description:
      "If the documents are in order, we will <strong  SMS/Call/email you the payment link to complete the payment processing.",
    link: "https://google.com",
  },
 
];
