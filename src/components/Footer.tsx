"use client";
import Link from "next/link";
import React from "react";
 

export function FooterSection() {
  return (
    <footer className='w-full border-t-2 border-solid border-white dark:border-yellow-50 font-medium text-lg dark:text-yellow-50 sm:text-base'>
    <div className='py-8 px-5 flex-none items-center justify-between md:flex'>
       <span>Copyright {new Date().getFullYear()} &copy; LTSPB All Rights Reserved</span> 
       <div className='flex items-center lg:py-2'> Designed & Maintained by <span className='text-blue-500 text-2xl px-1'>&#9825;</span> 
       by&nbsp;<Link href="http:nitinkm.com" className='hover:underline'>Nitin yadav</Link>
       </div>
       <Link className='hover:underline' target={"_blank"} href="/">Ltspb.ac.in</Link>
    </div>
</footer>
  );
}
