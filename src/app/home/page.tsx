import React from 'react'
import { LandingImage } from "@/components/HeroSection";
import { ApplicationFrom } from "@/components/ApplicationFrom";
import { LtspbLogosec } from "@/components/LtspbLogoSec";
import { CardStackDemo } from "@/components/Noticbord";
import { ParallaxScrollSecondDemo } from "@/components/GallarySection";
import { TopperStudentbar } from "@/components/AwardStudent";
import {  FounderSectionPara, TextGenerateEffectDemo } from "@/components/FounderSection";
import { ContactCards, AddressCards } from "@/components/Contact";
import { FooterSection } from "@/components/Footer";
import { CardHoverEffectDemo } from '@/components/EnquiryProsses';
import Infosection from '@/components/Infosection';
import { Classroominfo } from '@/components/Classroominfo';

const Home = () => {
  return (
    <div>
            <div>
         
        <LandingImage/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 ">
          <div className=""><LtspbLogosec/></div>
       <div><div className="mt-[3rem] mr-11">
        <ApplicationFrom /></div>
       <CardStackDemo/>
       <ParallaxScrollSecondDemo/>
       </div>
        </div>
        <div>
          <Infosection/>
          <CardHoverEffectDemo/>
          <TopperStudentbar/>
          <Classroominfo/>
          </div>
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
