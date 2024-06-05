import React from 'react'
import { LandingImage } from "@/components/HeroSection";
import { ApplicationFrom } from "@/components/ApplicationFrom";
import { LtspbLogosec } from "@/components/LtspbLogoSec";
import { NoticeCard } from "@/components/Noticbord";
import { GallaryScrool } from "@/components/GallarySection";
import { TopperStudentbar } from "@/components/AwardStudent";
import FounderSection from "@/components/FounderSection";
import { ContactCards, AddressCards } from "@/components/Contact";
import { FooterSection } from "@/components/Footer";
import { EnquiryCard } from '@/components/EnquiryProsses';
import Infosection from '@/components/Infosection';
import { Classroominfo } from '@/components/Classroominfo';
import { Yearsinfo } from '@/components/Exyeas';

function page() {
  return (
    <div>
      <div>
        <LandingImage />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 ">
        <div className="">
          <LtspbLogosec />
        </div>
        <div>
          <div className="md:mt-[3rem] md:mr-11">
            <ApplicationFrom />
          </div>
          <NoticeCard />
          <GallaryScrool />
        </div>
      </div>
      <div>
        <Infosection />
        <EnquiryCard />
        <TopperStudentbar />
        <Classroominfo />
      </div>
      <div>
        <Yearsinfo />
      </div>
      <div>
        <FounderSection />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2  p-10 m-10">
        <ContactCards />
        <AddressCards />
      </div>
      <FooterSection />
    </div>
  );
}

export default page;
