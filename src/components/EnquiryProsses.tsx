import { HoverEffect } from "./ui/card-hover-effect";

export function EnquiryCard() {
  return (
    <div className=" max-w-[85rem] mx-auto px-8"> 
    <div className="shadow-lg shadow-black bg-white/80 bg-hero-pattern bg-no-repeat bg-cover px-10 py-28 my-10 rounded-[2rem]">
    <h1 className="text-xl font-medium  px-5 py-3 drop-shadow-md  text-green-900 border-2 rounded-xl shadow-lg shadow-sky-400">Dedicated to nurturing young minds through creative learning and strong values. Enroll your child in the best school today!</h1>
      <HoverEffect items={projects} />
    </div>
    </div>
  );
}
export const projects = [
  {
    title: "Step 1",
    description:
       "Fill up the enquiry form",
    link: "https://ltspb.ac.in",
  },
  {
    title: "Step 2",
    description:
      "Submit the Application form at our office with the relevant documents.",
    link:  "https://ltspb.ac.in",
  },
  {
    title: "Step 3",
    description:
      "If the documents are in order, we will <strong  SMS/Call/email you the payment link to complete the payment processing.",
    link:  "https://ltspb.ac.in",
  },
 
];
