'use client';
import { CardStack } from "./ui/card-stack";
import { cn } from "@/utils/cn";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

interface Notice {
  _id: string;
  noticeBord: string;
  postBy: string;
  timestamp: string;
}

export function NoticeCard() {
  const [noticebords, setNoticebords] = useState<Notice[]>([]);

  const fetchNoticebordData = async () => {
    try {
      const response = await axios.get("/api/admin/noticeBord");
      setNoticebords(response.data.data);
      // console.log(response.data.data);
    } catch (error) {
      // console.log("Error fetching notice board data", error);
      toast.error("Error fetching notice board data");
    }
  };

  useEffect(() => {
    fetchNoticebordData();
  }, []);

  return (
    <div className="h-[40rem] flex items-center justify-center w-full mx-auto">
      <CardStack items={noticebords.map((notice) => ({
        id: notice._id,
        name: notice.postBy,
        designation: notice.timestamp,
        content: notice.noticeBord,
      }))} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};
