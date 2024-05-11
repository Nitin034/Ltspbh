"use client";
import Image from "next/image";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import React from 'react'

const words = `"Welcome, everyone! As we embark on this journey together, let us celebrate the vision and dedication of our remarkable principal, a beacon of strength and resilience. With her unwavering passion and commitment, she has not only built a school but a nurturing haven where every child's potential flourishes. Here's to her inspiring leadership, shaping futures one student at a time. Let's give a warm round of applause to our exceptional principal, a true trailblazer in education. With her tireless determination and boundless love for children, she has transformed dreams into reality, proving that with courage and perseverance, anything is possible. Today, we honor her remarkable journey as a single woman who built not just a school, but a sanctuary of learning and growth for our community."
`;
const wordstwo = `Join me in acknowledging the invaluable contribution of our principal's son, a beacon of dedication and diligence in our school's journey. With humility and passion, he has tirelessly worked alongside his mother, pouring his heart and soul into ensuring the success of our institution. Let's applaud his unwavering commitment and invaluable support, embodying the spirit of excellence that defines our school community. Let us shine a spotlight on the extraordinary dedication of our principal's son, the driving force behind our school's achievements. As the only son of our esteemed principal, he has woven his passion into the very fabric of our institution, striving relentlessly to elevate our standards of excellence. Today, we honor his unwavering commitment and tireless efforts, a testament to the profound impact of family and dedication in shaping the future of our school
`;
 
 export default function FounderSection() {
   return (
     <div className='bg-white/90 h-1/2 w-full'>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2  p-10 m-10 mx-auto ">
        <div className="text-black  w-96 h-full">
          <div className="overflow-hidden flex rounded-full">
          <Image
          src="/founder-removebg-preview.png"
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
          </div>
          <h1 className="text-black text-xl p-3 font-semibold font-dancing">Shivani Mishra</h1>
       <TextGenerateEffect words={words}/>
        </div>
        <div className="text-black  w-96 h-full">
          <div className="overflow-hidden flex rounded-full">
          <Image
          src="/founder2-removebg-preview.png"
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        /> 
          </div>
          <h1 className="text-black text-xl p-3 font-semibold font-dancing">Ayush Mishra</h1>
    <TextGenerateEffect words={wordstwo} />
        </div>
      </div>
       
     </div>
   )
 }
 
  
 