"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/contact-addres-card";
import Link from "next/link";
import LogoSvg from "./LogoSvg";

export function ContactCards() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
      <div className="w-56 h-56 flex mx-auto">
      <LogoSvg/>
      </div>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-800 dark:text-white"
        >
          Get In Touch
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-700 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          <a className="text-neutral-800 text-lg font-semibold">Location:</a>  Shivdham Viswashnagar, Bela Pratapgarh, Uttar Pradesh 230001
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-700 text-sm max-w-sm mt-2 dark:text-neutral-300"
        ><Link className="hover:text-blue-900" href="https://www.whatsapp.com"  ><span className="text-neutral-800 text-lg font-semibold mr-2">CALL US ON  </span>8787050522</Link> 
          
           
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-700 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
           <Link className="hover:text-blue-900" href="https://www.instagram.com/_learning_tree_school_pbh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="  ><span className="text-neutral-800 text-lg font-semibold mr-2">Instagram: </span>_learning_tree_school_pbh </Link> 
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-700 text-sm max-w-sm mt-2 dark:text-neutral-300"
        ><Link className="hover:text-blue-900" href="https://www.whatsapp.com"  ><span className="text-neutral-800 text-lg font-semibold mr-2">WhatAppp: </span>8787050522</Link> 
          
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-700 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
         <Link className="hover:text-blue-900" href="https://www.facebook.com"  ><span className="text-neutral-800 text-lg font-semibold mr-2">Facebook : </span>Learning_tree_school_pbh </Link> 
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-700 text-sm max-w-sm mt-2 dark:text-neutral-300"
        ><Link className="hover:text-blue-900" href="https://google.com"  ><span className="text-neutral-800 text-lg font-semibold mr-2">Email: </span>ltspb@gmail.com</Link> 
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-700 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          <a className="text-neutral-800 text-lg font-semibold">School Hours: 8Am to 3PM</a> 
           
        </CardItem>
        
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Call Now
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
export function AddressCards() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-800 dark:text-white"
        >
          Address
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-700 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Learning Tree School
          Shivdham Viswashnagar, Bela Pratapgarh, Uttar Pradesh 230001
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.823259817902!2d81.9984023748608!3d25.908180002537957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a972968e275ef%3A0x4a42bc1a1c9e2036!2sLearning%20Tree%20School!5e0!3m2!1sen!2sin!4v1713946797399!5m2!1sen!2sin" width="430" height="550"     loading="lazy"></iframe>
        
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
