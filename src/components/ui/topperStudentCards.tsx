"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";

export const TopperStudentCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  fetchAllWinners, // Receive the fetchAllWinners prop
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    image: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  fetchAllWinners: () => void; // Define the type of fetchAllWinners
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  useEffect(() => {
    fetchAllWinners(); // Call fetchAllWinners on component mount
  }, [fetchAllWinners]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 mt-5 py-2 md:w-[450px]"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}
            key={`${item.name}-${idx}`} // Ensure the key is unique
          >
            <blockquote>
              <div className="flex flex-col items-center pb-10">
                <img
                  className="w-28 h-28 -mt-10 mb-3 rounded-full shadow-lg"
                  src={item.image}
                  alt="student image"
                />
                <h5 className="mb-1 text-xl font-medium text-orange-400 dark:text-white">
                  {item.name}
                </h5>
                <span className="text-sm text-amber-600 dark:text-gray-400">
                  {" "}
                  {item.title}
                </span>
                <div className="flex mt-4 md:mt-6">
                  <span className=" relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                    {item.quote}
                  </span>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
