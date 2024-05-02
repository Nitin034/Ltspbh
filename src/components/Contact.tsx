"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/contact-addres-card";
import Link from "next/link";

export function ContactCards() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="w-1/2 m-auto"
        >
          <img src="/images/IMG-20240422-WA0002.jpg" alt="logo" ></img>
        </CardItem>
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
        >
          <a className="text-neutral-800 text-lg font-semibold">CALL US ON : </a> 
          2222-3333333-20
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-700 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          <a className="text-neutral-800 text-lg font-semibold">Instagram:</a> 
          learnihg_tree_School_Pb
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-700 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          <a className="text-neutral-800 text-lg font-semibold">WhatAppp:</a> 
          90988938993
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-700 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          <a className="text-neutral-800 text-lg font-semibold">FaceBook:</a> 
          ltspb
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-700 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          <a className="text-neutral-800 text-lg font-semibold">Email:</a> 
          ltspb@gmail.com
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
