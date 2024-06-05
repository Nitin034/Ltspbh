'use client';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from 'axios';
import toast from "react-hot-toast";

type Card = {
  id: string;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    fetchNoticebordData(); // Call fetchNoticebordData when component mounts
    startFlipping();

    return () => clearInterval(interval);
  }, []);

  const fetchNoticebordData = async () => {
    try {
      const response = await axios.get("/api/admin/noticeBord");
      const noticebords = response.data.data;
      const formattedCards = noticebords.map((notice: any) => ({
        id: notice._id,
        name: notice.postBy,
        designation: notice.timestamp,
        content: notice.noticeBord,
      }));
      setCards(formattedCards);
    } catch (error:any) {
      // console.log("Error fetching notice board data", error);
      toast.error("Error fetching notice board data", error);
    }
  };

  let interval: any;
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative h-80 w-80 md:h-80 md:w-[30rem]">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute dark:bg-black bg-gray-200 h-auto w-auto md:h-[20rem] md:w-[30rem] rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, // decrease z-index for the cards that are behind
            }}
          >
             <h1 className="text-red-900 text-2xl font-bold drop-shadow-md mx-auto py-5">NOTICE BOARD</h1>
            <div className="font-normal text-neutral-700 dark:text-neutral-200">
              {card.content}
            </div>
            <div>
              <p className="text-neutral-500 font-medium dark:text-white">
                {card.name}
              </p>
              <p className="text-neutral-400 font-normal dark:text-neutral-200">
                {card.designation}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
