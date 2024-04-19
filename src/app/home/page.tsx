import React from 'react'
import { ImagesSliderDemo } from "@/components/HeroSection";
import { ApplicationFrom } from "@/components/ApplicationFrom";
import { GoogleGeminiEffectDemo } from "@/components/GoogleGeminiEffect";
import { CardStackDemo } from "@/components/Noticbord";
import { ParallaxScrollSecondDemo } from "@/components/GallarySection";
import { TopperStudentbar } from "@/components/AwardStudent";
import {  FounderSectionPara, TextGenerateEffectDemo } from "@/components/FounderSection";
import { ContactCards, AddressCards } from "@/components/Contact";
import { FooterSection } from "@/components/Footer";

const Home = () => {
  return (
    <div>
            <div>
         
        <ImagesSliderDemo/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 ">
          <div className=""><GoogleGeminiEffectDemo/></div>
       <div><div className="mt-[6rem] mr-11">
        <ApplicationFrom /></div>
       <CardStackDemo/>
       <ParallaxScrollSecondDemo/>
       </div>
        </div>
        <div><TopperStudentbar/></div>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2  p-10 m-10">
          <TextGenerateEffectDemo/>
          <FounderSectionPara/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2  p-10 m-10">
            <ContactCards/>
            <AddressCards/>
        </div>
        <FooterSection/>
    </div>
  )
}

export default Home
