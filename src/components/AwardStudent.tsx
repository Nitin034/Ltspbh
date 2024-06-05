"use client"
import React, { useEffect, useState } from "react";
import { TopperStudentCards } from "./ui/topperStudentCards";
import axios from "axios";

export function TopperStudentbar() {
  // Specify the type of winners as an array of objects
  const [winners, setWinners] = useState<{
    winner_message: string;
    winner_name: string;
    winner_rank: string;
    image_url: string;
  }[]>([]);

  const fetchAllWinners = async () => {
    try {
      const { data: { winners } } = await axios.get('/api/admin/winner');
      setWinners(winners);
    } catch (error) {
      console.error("Error fetching winners:", error);
    }
  }; 

  useEffect(() => {
    fetchAllWinners();
  }, []);

  return (
    <div className=" max-w-[85rem] mx-auto px-8"> 
    <div className="shadow-lg shadow-black bg-white/80 bg-no-repeat bg-cover py-28 my-10 rounded-[2rem]">
    <div className="rounded-md flex flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <TopperStudentCards
        items={winners.map(winner => ({
          quote: winner.winner_message,
          name: winner.winner_name,
          title: winner.winner_rank,
          image: winner.image_url,
        }))}
        direction="right"
        speed="slow"
        fetchAllWinners={fetchAllWinners}
      />
    </div>
    </div>
    </div>
  );
}

