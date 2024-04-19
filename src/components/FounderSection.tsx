"use client";
import Image from "next/image";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Founder of the this property mr Nitin yadav from cse background and they are the best website desiner in the India they are bild a massabe project in this field
`;
const wordstwo = `Founder of the this property mr Nsw and the Nitin from cse background and they are the best website desiner in the India they are bild a massabe project in this field he is also king of the this Indestry
`;
 
 

export function TextGenerateEffectDemo() {
  return <div>
     <Image
          src="/founder.jpg"
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        /> 
       <TextGenerateEffect words={words}/>
  </div>
  
  ;
}
export function FounderSectionPara() {
  return <div>
     <Image
          src="/founder2.jpg"
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        /> 
    <TextGenerateEffect words={wordstwo} /></div> 
}
