"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { LtspbLogo } from "./ui/ltspbLogo";

export function LtspbLogosec() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
  const pathLengthSix = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.9]);
  const pathLengthSeven = useTransform(scrollYProgress, [0, 0.8], [0.11, 1.2]);
  const pathLengthEight = useTransform(scrollYProgress, [0, 0.8], [0, 1.6]);
  const pathLengthnine = useTransform(scrollYProgress, [0, 0.8], [0, 1.4]);
  const pathLengthTen = useTransform(scrollYProgress, [0, 0.9], [0, 1.44]);

  return (
    <div
      className="h-[400vh]   w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
      ref={ref}
    >
      <LtspbLogo
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
          pathLengthSix,
          pathLengthSeven,
          pathLengthEight,
          pathLengthnine,
          pathLengthTen
        ]}
      />
    </div>
  );
}
