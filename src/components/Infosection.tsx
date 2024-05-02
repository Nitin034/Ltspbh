"use client"
import * as React from "react";
import { useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

const messages = ["Astronau", "Architect", "Scientist", "Doctor", "Dancer","Superman","Spiderman","Wonder Woman","Judge","Firefighter","Police"];
const colors = ["#00cc88", "#0099ff", "#8855ff", "#ff0055", "#ee4444","#8855ff","#ee4444","#0099ff","#ff0055","#00cc88","#0099ff" ];


export default function Infosection() {
    const [messageIndex, setMessageIndex] = useState(0);
    const progress = useMotionValue(0);
    const fill = colors[messageIndex];
  
    React.useEffect(() => {
      const animation = animate(progress, 1, {
        duration: 0.8, // Adjust the duration here to slow down or speed up the animation
        ease: "easeInOut",
        onComplete: () => {
          if (messageIndex === messages.length - 1) {
            setMessageIndex(0);
          } else {
            setMessageIndex(messageIndex + 1);
          }
        }
      });
  
      return () => animation.stop();
    }, [messageIndex]);
  
    React.useEffect(() => {
      // Reset animation when messageIndex changes
      progress.set(0);
    }, [messageIndex]);
  return (
    <div className='bg-white w-full'>
        <div className='h-96 max-w-5xl mx-auto px-8'>
            <h3 className='text-green-800 py-2 font-extrabold text-xl'>WELCOME TO LEARNING TREE SCHOOLS</h3>
            <h1 className="text-orange-400 font-extrabold text-6xl">START EARLY, STAY AHEAD</h1>
            <h4 className='text-slate-900 py-5 font-bold text-lg flex'>Let your child live in the moment, being a
            <span className="px-2" ><motion.h1
        style={{ color: fill, fontSize: "3rem", fontWeight: "bold" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >{messages[messageIndex]}</motion.h1></span>
      </h4>
      <p className="text-slate-900 text-lg">We believe every child wakes up to be something different every day. At Learning Tree Schools, our teachers nurture your child's natural curiosity and inspire a lifelong love for learning.
      <span className="text-xl flex py-3 font-medium">Learning Tree Schools : Where every child discovers their passion.</span></p>
        </div>
       
      
    
      
    </div>
  )
}

 
