import { HoverEffect } from "./ui/Age-card";

export function Classroominfo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
        <h1 className="text-2xl font-semibold text-green-600 py-4">AN EARLY-YEARS CLASSROOM AT LEARNING TREE SCHOOL</h1>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "AGE RANGE",
    description:
       "2 - 5",
    link: "https://stripe.com",
  },
  {
    title: "AVG CLASS SIZE",
    description:
      "20 - 25",
    link: "https://netflix.com",
  },
  {
    title: "TEACHER- STUDENT RATIO",
    description:
      "1 : 8",
    link: "https://google.com",
  },
 
];
