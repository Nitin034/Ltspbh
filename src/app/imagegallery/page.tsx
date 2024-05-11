"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '@/components/Sidebar';
import { NextResponse } from 'next/server';

const Page = () => {
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState<File | null>(null);
    const [images, setImages] = useState<{
        image_url: string;
        public_id: string;
        _id: string;
    }[]>([]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImage(e.target.files[0]);
        }
    };

    const fetchAllImages = async () => {
        try {
            const { data: { images } } = await axios.get('/api/admin/upload-image');
            setImages(images);
        } catch (error: any) {
          return NextResponse.json({ msg: error }, { status: 200 });
        }
    };

    const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (!image) {
                return;
            }

            const formData = new FormData();
            formData.append('image', image);

            const response = await axios.post('/api/admin/upload-image', formData);
            await fetchAllImages();
        } catch (error: any) {
          return NextResponse.json({ msg: error.message }, { status: 200 });
            // console.log('Error', error.message);
        }
    };

    const deleteImage = async (id: string) => {
        setLoading(true);
        try {
            const { data } = await axios.delete('/api/admin/upload-image/' + id.replace('Ltspb-Images/', ''));
            await fetchAllImages();
            console.log(data);
        } catch (error: any) {
          return NextResponse.json({ msg: error.message }, { status: 200 });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAllImages();
    }, []);

    return (
        <div>
            <Sidebar />
            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    <div className="flex flex-col justify-center items-center min-h-screen">
                        <div className='border border-white flex py-5 my-5 rounded-lg'>
                        <form onSubmit={onSubmitHandler} className="mx-auto px-10 py-5">
                            <input onChange={onChangeHandler} className='border border-white' type="file" name="" id="" />
                            <div className='my-3 mx-1'> 
                            <button disabled={loading} className="bg-green-600 px-4 py-2 rounded-sm text-white m-[1px] disabled:bg-slate-600"
                                            >{loading ? 'Loading...' : 'Upload'}
                                            </button></div>
                        </form>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 items-start gap-5 py-20 px-10">
                            {images && images.map((cur, i) => (
                                <div key={i} className="flex flex-wrap md:-m-2 -m-1 border border-white rounded-sm">
                                            <img
                                                alt="gallery"
                                                className="w-[28rem] object-cover h-36 object-center block"
                                                src={cur.image_url}
                                            />
                                            <button
                                                disabled={loading}
                                                onClick={() => deleteImage(cur.public_id)}
                                                className="bg-red-400 hover:bg-red-500 text-cyan-100 rounded-sm px-6 py-1 m-[1px] disabled:bg-slate-600"
                                            >
                                                {loading ? 'Loading...' : 'Delete'}
                                            </button>
                                        </div>
                            
                              
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
