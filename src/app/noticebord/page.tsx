'use client'
import Sidebar from '@/components/Sidebar'
import axios from 'axios'
import { NextResponse } from 'next/server'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

interface Notice {
    _id: string;
    noticeBord: string;
    postBy: string;
    timestamp: string;
}

export default function NoticeBord() {
    const [notice, setNotice] = useState({
        noticeBord: "",
        postBy: ""
    });
    const [noticebords, setNoticebords] = useState<Notice[]>([]);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = useState(false);

    const onPublice = async () => {
        try {
            setLoading(true);
            const res = await axios.post("/api/admin/noticeBord", notice);
            // console.log("Notice Published Successfully", res.data);
            toast.success("Notice Published Successfully");
            setNotice({ noticeBord: "", postBy: "" });  // Clear input fields
            fetchNoticebordData();  // Fetch the latest notices
        } catch (error: any) {
            // console.log("Publication failed");
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if(notice.noticeBord.length > 0 && notice.postBy.length > 0){
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [notice]);

    const fetchNoticebordData = async () => {
        try {
            const response = await axios.get("/api/admin/noticeBord");
            setNoticebords(response.data.data);
            // console.log(response.data.data);
        } catch (error:any) {
            // console.log("Error fetching notice board data", error);
            toast.error("Error fetching notice board data");
        }
    };

    useEffect(() => {
        fetchNoticebordData();
    }, []);

    const deleteNotice = async (id: string) => {
        try {
            const response = await fetch(`/api/admin/noticeBord`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            });

            const result = await response.json();
            if (result.success) {
                setNoticebords(noticebords.filter(notice => notice._id !== id));
                toast.success("Notice deleted successfully");
            } else {
                console.error(result.message);
                toast.error(result.message);
            }
        } catch (error) {
            // console.error('Error deleting notice:', error);
            toast.error('Error deleting notice');
        }
    };

    return (
        <div>
            <Sidebar/>
            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    <div className='flex flex-col justify-center items-center min-h-screen'>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Your Notice Board Text</label>
                        <textarea id="message" value={notice.noticeBord} onChange={(e) => setNotice({...notice, noticeBord: e.target.value})} rows={4}  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                        <label htmlFor='Name' className="block mb-2 text-sm m-5 font-medium text-white">Administrator Name</label>
                        <input id="name" value={notice.postBy} onChange={(e) => setNotice({...notice, postBy: e.target.value})} className='p-5 m-3 text-black'  placeholder="Enter Your Name" type="text"></input>
                        <button className='bg-red-400 p-5 rounded-lg hover:bg-red-300 text-black' type='submit' onClick={onPublice} disabled={buttonDisabled}>{buttonDisabled ? "Enter New Notice" : "Publish"}</button>
                    </div>
                    <div className='px-2 py-3'>
                        {noticebords.map((noticebord) => (
                            <div key={noticebord._id} className='border border-white px-3 py-3 mx-3 my-3 rounded-sm'>
                                <h1 className='bg-neutral-500 p-2'><span className='text-black font-bold'>YOUR NOTICE :</span>{noticebord.noticeBord}</h1>
                                <h2 className='bg-green-500 flex p-2'><span className='text-black font-bold'>POST BY :</span>{noticebord.postBy}</h2>
                                <a className='bg-sky-400 px-1 py-2 '><span className='text-black font-bold'>Date :</span>{new Date(noticebord.timestamp).toLocaleString()}</a>
                                <button className='bg-red-400 hover:bg-red-500 px-2 py-2 m-3 rounded-sm' onClick={() => deleteNotice(noticebord._id)}>Delete</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
