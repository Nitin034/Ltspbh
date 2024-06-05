import { HoverEffect } from "./ui/Age-card";

export function Classroominfo() {
  return (
    <div className=" max-w-[85rem] mx-auto px-8"> 
    <div className=" shadow-lg shadow-black bg-white/80  bg-no-repeat bg-cover   px-10 py-28 my-10 rounded-[2rem]">
        <h1 className="text-2xl font-semibold text-green-600 drop-shadow-md py-4">AN EARLY-YEARS CLASSROOM AT LEARNING TREE SCHOOL</h1>
      <HoverEffect items={projects} />
    </div>
    </div>
  );
}
export const projects = [
  {
    title: "AGE RANGE",
    description:
       "2 - 5",
    link:  "https://ltspb.ac.in",
  },
  {
    title: "AVG CLASS SIZE",
    description:
      "20 - 25",
    link:  "https://ltspb.ac.in",
  },
  {
    title: "TEACHER- STUDENT RATIO",
    description:
      "1 : 8",
    link:  "https://ltspb.ac.in",
  },
 
];
