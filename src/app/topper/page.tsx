'use client'
import Sidebar from '@/components/Sidebar'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export default function TopperStudent() {

    const [topper, setTopper] = useState({
        someText: "",
        topperName: "",
        toperImage: "",
        rank: ""
    })
    const [buttonDisabled, setButtonDisabled] = useState(false)

const [loading, setLoading] = useState(false)

const onPost = async () => {
    try {
        setLoading(true)
        const res = await axios.post("/api/admin/topper", topper)
        console.log("Topper Details Publiced Success" , res.data);
        
    } catch (error: any) {
        console.log("Topper Post failed")
        toast.error(error.message) 
    }
}
useEffect(() => {
    if(topper.someText.length > 0 && topper.rank.length > 0){
     setButtonDisabled(false)
    } else {
     setButtonDisabled(true)
    }
}, [topper])
  return (
    <div>
      <Sidebar/>
      <div className="p-4 sm:ml-64">
   <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
    <div className='flex flex-col justify-center items-center min-h-screen'>
    <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Some Motivational Line for topper</label>
<textarea id="message" value={topper.someText} onChange={(e) => setTopper({...topper, someText: e.target.value})} rows={4}  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
<input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" value={topper.toperImage} onChange={(e) => setTopper({...topper, toperImage: e.target.value})} type="file"></input>

<label htmlFor='rank' className="block mb-2 text-sm m-5 font-medium text-white">Topper Rank</label>
<input id="rank" value={topper.rank} onChange={(e) => setTopper({...topper, rank: e.target.value})} className='p-5 m-3 text-gray-900'  placeholder="Enter topper rank" type="text"></input>

<label htmlFor='name' className="block mb-2 text-sm m-5 font-medium text-white">Topper Name</label>
<input id="name" value={topper.topperName} onChange={(e) => setTopper({...topper, topperName: e.target.value})} className='p-5 m-3 text-gray-900'  placeholder="Enter topper Name" type="text"></input>
<button className='bg-red-400 p-5 rounded-lg hover:bg-red-300 text-black' type='submit' onClick={onPost}>{buttonDisabled ? "Enter topper Details" : "Publice"}</button>
    </div>
    
 

    </div>
    </div>
    </div>
  )
}

