"use client"
import Sidebar from '@/components/Sidebar';
import axios from 'axios';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'

const Page = () => {
  const[loading, setLoading] = useState(false);

    const[image, setImage] = useState<File | null>(null);

    const[images, setImages] = useState<{
      image_url: string; 
      public_id :string;
      _id: string;
    }[]>([]);

    const OnChangeHandler = (e:ChangeEvent<HTMLInputElement>) =>{
        
        if(e.target.files){
            setImage(e.target.files[0])
        }

    }
    const FetchAllImages = async()=> {
      try {
        const {
          data: { images }, 
        } = await axios.get("/api/admin/upload-image");
        setImages(images)
      } catch (error:any) {
        console.log(error.message);
      }
    }

    const OnSubmitHandler = async(e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
          if(!image){
            return
          }

          const formData = new FormData();
          formData.append("image", image);

          const response = await axios.post("/api/admin/upload-image", formData);
           await FetchAllImages();

            
        } catch (error: any) {
            console.log("Error" , error.message);
            
        }
    }

    const deleteImage = async(e: string) => {
      setLoading(true)
      try {
        
        const {data} = await axios.delete("/api/admin/upload-image/"+ e.replace("Ltspb-Images/", ""));
         await FetchAllImages();

          console.log({data});
      } catch (error: any) {
          console.log("Error" , error.message);
          
      }finally{
        setLoading(false);
      }
  }

    useEffect(() => {
      FetchAllImages()
    }, [])

  return (
    <div>
      <Sidebar/>
      <div className="p-4 sm:ml-64">
   <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <form onSubmit={OnSubmitHandler} className='w-1/2 mx-auto py-10'>
        <input onChange={OnChangeHandler} type='file' name='' id='' />
        <button className='bg-gray-600 px-4 py-2 rounded-sm text-white'>uplode</button>
      </form>
      <div className='px-10 flex flex-wrap gap-x-5'>
      {images?.map((cur, i) => {
          return(
            <div key={i} className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" 
                src={cur.image_url} ></img>
                <button disabled={loading} onClick={() => deleteImage(cur.public_id)} className='bg-red-400 text-cyan-100 rounded-sm px-5 py-3 disabled:bg-slate-600'>{loading? "loading...": "Delete"}</button>
              </div>
            </div>
            </div>
            
          )
        })
      }
      </div>
      </div>
      </div>
      </div>
      </div>
  )
}

export default Page
