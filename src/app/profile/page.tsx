'use client'
import React, { useState } from "react";
import axios from 'axios'
import { useRouter } from "next/navigation";
import toast from 'react-hot-toast'
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
 
 export default function Profilepage(){
    const router = useRouter()

    const [data, setData] = useState("nothing")

    const getUserDetails = async () => {
        try {
            const res = await axios.post("api/admin/me")
            console.log(res.data);
            setData(res.data.data._id)
            
        } catch (error: any) {
            console.log(error.message);
            toast.error(error.message)
        }
    }

    const logout = async () => {
        try {
            await axios.get('/api/admin/logout')
            toast.success("logout success");
            router.push('/login');
            
        } catch (error: any) {
            console.log(error.message);
            toast.error(error.message)
        }
    }
   return (
    <>
    <Sidebar/>
    <div className="p-4 sm:ml-64">
   <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
    <div>
    <button className="bg-teal-400 p-2" onClick={logout}>Logout</button>
       <button className="bg-amber-300 p-2" onClick={getUserDetails}>Detail</button>
    </div>
    <div className="flex flex-col justify-center items-center min-h-screen">
    <h2>{data === "nothing" ? "Nothing" : <Link href={`/profile/${data}`}>{data}</Link>}</h2>
    </div>
    
   </div>
</div>
     </>
   )
 }
 
 
 