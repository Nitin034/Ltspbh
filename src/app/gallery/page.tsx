'use client'
import Sidebar from '@/components/Sidebar'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export default function Gallery() {

    const [image, setImage] = useState({
        favImage: "",
        videoFile: "",
         
    })
    const [buttonDisabled, setButtonDisabled] = useState(false)

const [loading, setLoading] = useState(false)

const onUplode = async () => {
    try {
        setLoading(true)
        const res = await axios.post("/api/admin/gallery", image)
        console.log("Gallery Image Publiced Success" , res.data);
        
    } catch (error: any) {
        console.log("Gallery Image Post failed")
        toast.error(error.message) 
    }
}
useEffect(() => {
    if(image.favImage.length > 0 && image.videoFile.length > 0){
     setButtonDisabled(false)
    } else {
     setButtonDisabled(true)
    }
}, [image])
  return (
    <div>
      <Sidebar/>
      <div className="p-4 sm:ml-64">
   <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
    <div className='flex flex-col justify-center items-center min-h-screen'>
    
<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
<input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" value={image.favImage} onChange={(e) => setImage({...image, favImage: e.target.value})} type="file"></input>

<button className='bg-red-400 p-5 m-3 rounded-lg hover:bg-red-300 text-black' type='submit' onClick={onUplode}>{buttonDisabled ? "Uplode Picture" : "Post"}</button>
    </div>
    
 

    </div>
    </div>
    </div>
  )
}

