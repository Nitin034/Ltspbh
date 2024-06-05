import { HoverEffect } from "./ui/Age-card";

export function Yearsinfo() {
  return (
    <div className=" max-w-[85rem] mx-auto px-8"> 
    <div className="  bg-white/90  bg-gradient-to-b from-blue-300 to-blue-500 bg-gradient-to-t from-green-400 to-transparent px-10  py-28 my-10 rounded-[2rem] shadow-lg shadow-black">
        <h1 className="text-xl font-medium  px-5 py-3 drop-shadow-md  text-green-900 border-2 rounded-xl shadow-lg shadow-sky-400">Ltspb is a school that is dedicated to innovative approaches for modern learning. Where in the competitive world everyone is running so fast we let the children choose the activity they wish to choose and go for. Therefore, bringing to you all the achievements by our students and school.</h1>
      <HoverEffect items={projects} />
    </div>
    </div>
  );
}
export const projects = [
  {
    title: "STUDENTS",
    description:
       "500+",
    link:  "https://ltspb.ac.in",
  },
  {
    title: "STAFF",
    description:
      "40+",
    link:  "https://ltspb.ac.in",
  },
  {
    title: "YEARS ESTABLISHED",
    description:
      "12",
    link:  "https://ltspb.ac.in",
  },
 
];
