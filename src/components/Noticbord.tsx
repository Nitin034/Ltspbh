"use client";
import { useEffect, useState } from "react";
import { CardStack } from "./ui/card-stack";
import { cn } from "@/utils/cn";
import axios from "axios";
import { NextResponse } from "next/server";
export function CardStackDemo() {

  const [noticebords, setNoticebords] = useState([]);
 
  const fetchNoticebordData = async () => {
    try {
        const response = await axios.get("/api/admin/noticeBord");
        setNoticebords(response.data.data);
        console.log(response.data.data);

    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}

useEffect(() => {
    fetchNoticebordData();
}, []);

  return (
    <div className="h-[40rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>

/* <div> 
{noticebords.map((noticebord: any)=> (
<div className="h-[40rem] flex items-center justify-center w-full">
  <CardStack items={[{
     id: 0,
         name: new Date(noticebord.timestamp).toLocaleString(),
         designation: noticebord.postBy,
         content: (
           <p>
              {noticebord.noticeBord}
           </p>
         )
  }]} />
</div>

))}
</div> */
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    content: (
      <p>
        These cards are amazing, <Highlight>I want to use them</Highlight> in my
        project. Framer motion is a godsend ngl tbh fam 🙏
      </p>
    ),
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "Senior Shitposter",
    content: (
      <p>
        I dont like this Twitter thing,{" "}
        <Highlight>deleting it right away</Highlight> because yolo. Instead, I
        would like to call it <Highlight>X.com</Highlight> so that it can easily
        be confused with adult sites.
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        The first rule of
        <Highlight>Fight Club</Highlight> is that you do not talk about fight
        club. The second rule of
        <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
        club.
      </p>
    ),
  },
];
