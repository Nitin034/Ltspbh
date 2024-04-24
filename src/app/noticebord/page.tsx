'use client'
import Sidebar from '@/components/Sidebar'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export default function NoticeBord() {

    const [notice, setNotice] = useState({
        noticeBord: "",
        postBy: ""
    })
    const [buttonDisabled, setButtonDisabled] = useState(false)

const [loading, setLoading] = useState(false)

const onPublice = async () => {
    try {
        setLoading(true)
        const res = await axios.post("/api/admin/noticeBord", notice)
        console.log("Notice Publiced Success" , res.data);
        
    } catch (error: any) {
        console.log("Publication failed")
        toast.error(error.message) 
    }
}
useEffect(() => {
    if(notice.noticeBord.length > 0 && notice.postBy.length > 0){
     setButtonDisabled(false)
    } else {
     setButtonDisabled(true)
    }
}, [notice])
  return (
    <div>
      <Sidebar/>
      <div className="p-4 sm:ml-64">
   <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
    <div className='flex flex-col justify-center items-center min-h-screen'>
    <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Your Notice Bord Text</label>
<textarea id="message" value={notice.noticeBord} onChange={(e) => setNotice({...notice, noticeBord: e.target.value})} rows={4}  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
<label htmlFor='Name' className="block mb-2 text-sm m-5 font-medium text-white">Administrator Name</label>
<input id="name" value={notice.postBy} onChange={(e) => setNotice({...notice, postBy: e.target.value})} className='p-5 m-3'  placeholder="Enter Your Name" type="text"></input>
<button className='bg-red-400 p-5 rounded-lg hover:bg-red-300 text-black' type='submit' onClick={onPublice}>{buttonDisabled ? "Enter New Notice" : "Publice"}</button>
    </div>
    
 

    </div>
    </div>
    </div>
  )
}

