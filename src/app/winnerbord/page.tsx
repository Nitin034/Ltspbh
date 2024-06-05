"use client"
import Sidebar from '@/components/Sidebar';
import axios from 'axios';
import { NextResponse } from 'next/server';
import { useEffect, useState } from 'react';

const UploadWinner = () => {
  const [winnerName, setWinnerName] = useState('');
  const [winnerRank, setWinnerRank] = useState('');
  const [winnerMessage, setWinnerMessage] = useState('');
  const [winnerFile, setWinnerFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);
  const [winners, setWinners] = useState<{
    image_url: string;
    public_id: string;
    winner_name: string;
    winner_rank: string;
    winner_message: string;
    _id: string;
  }[]>([]);

  const handleFileChange = (e:any) => {
    setWinnerFile(e.target.files[0]);
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    if (!winnerName || !winnerRank || !winnerMessage || !winnerFile) {
      setUploadStatus('Please fill in all fields and upload a file.');
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('winner', winnerFile);
    formData.append('winner_name', winnerName);
    formData.append('winner_rank', winnerRank);
    formData.append('winner_message', winnerMessage);

    try {
        const response = await fetch('/api/admin/winner', {
            method: 'POST',
            body: formData,
          });

      const data = await response.json();
      
      if (response.ok) {
        setUploadStatus('Upload successful!');
        // console.log('Winner Data:', data.winnerData);
        // Disable the submit button and reload the page after a successful upload
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        setUploadStatus(`Upload failed: ${data.error}`);
        setIsSubmitting(false);
      }
    } catch (error:any) {
      setUploadStatus(`Upload failed: ${error.message}`);
      setIsSubmitting(false);
    }
  };

  const fetchAllWinners = async () => {
    try {
      const { data: {winners}} = await axios.get('/api/admin/winner');
      setWinners(winners);
    } catch (error:any) {
      return NextResponse.json({ msg: error }, { status: 200 });
    }
  };

  const deleteWinner = async (id: string)=> {
    setLoading(true);
    try {
      const {data} = await axios.delete('/api/admin/winner/' + id.replace('Winner-Image/', ''));
      await fetchAllWinners();
      
    } catch (error: any) {
      return NextResponse.json({ msg: error.message }, { status: 200 });
    } finally {
      setLoading(false);
  }
  }

  useEffect(() => {
    fetchAllWinners();
  }, []);
  return (
    <div>
        <Sidebar/>
        <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    <div className="flex flex-col justify-center items-center min-h-screen">
                    <h1 className='flex mx-auto font-bold text-xl justify-center items-center'>Upload Winner Information</h1>
                        <div className='border border-white flex py-5 my-5 rounded-lg'>
      <form onSubmit={handleSubmit}>
        <div className='bg-green-400 mx-2 my-2 p-2'>
          <label className='mr-2' htmlFor="winner_name">Winner Name:</label>
          <input
           className='px-2 py-3 text-black' 
            type="text"
            id="winner_name"
            placeholder='Enter Winner name'
            value={winnerName}
            onChange={(e) => setWinnerName(e.target.value)}
            required
            disabled={isSubmitting}
          />
        </div>
        <div className='bg-green-400 mx-2 my-2 p-2'>
          <label className='mr-2'  htmlFor="winner_rank">Winner Rank:</label>
          <input
           className='px-2 py-3 text-black' 
            type="text"
            id="winner_rank"
            placeholder='Enter Winner Rank'
            value={winnerRank}
            onChange={(e) => setWinnerRank(e.target.value)}
            required
            disabled={isSubmitting}
          />
        </div>
        <div className='bg-green-400 mx-2 my-2 p-2'>
          <label className='mr-2'  htmlFor="winner_message">Winner Message:</label>
          <textarea
            className='px-2 py-3 text-black' 
            id="winner_message"
            placeholder='Enter Winner message'
            value={winnerMessage}
            onChange={(e) => setWinnerMessage(e.target.value)}
            required
            disabled={isSubmitting}
          />
        </div>
        <div className='bg-green-400 mx-2 my-2 p-2'>
          <label className='mr-2'  htmlFor="winner">Upload Winner Image:</label>
          <input
            className='px-2 py-3 text-black' 
            type="file"
            id="winner"
            onChange={handleFileChange}
            required
            disabled={isSubmitting}
          />
        </div>
        <button className='bg-green-400 hover:bg-green-500 rounded-md mx-2 my-2 p-2' type="submit"  disabled={isSubmitting}>Submit</button>
      </form>
      </div>
      <div className='flex mx-auto font-bold text-xl justify-center items-center'>{uploadStatus && <p>{uploadStatus}</p>}</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {winners && winners.map((cur, i) => (
          <div key={i} className='w-[20rem] h-auto border border-2xl border-white m-3 rounded-sm bg-slate-800'> 
          <img alt='winner Student' className='w-46 h-44 flex my-4 mx-auto rounded-full' 
          src={cur.image_url}/>
          <h1><span className='mx-3 text-xl font-bold'>Name :</span>{cur.winner_name}</h1>
          <h2><span className='mx-3 text-xl font-bold'>Rank :</span>{cur.winner_rank}</h2>
          <h4><span className='mx-3 text-xl font-bold'>Message :</span>{cur.winner_message}</h4>
          <button disabled={loading} onClick={() => deleteWinner(cur.public_id)} className="bg-red-400 hover:bg-red-500 text-cyan-100 rounded-sm px-6 py-1 my-4 mx-2 disabled:bg-slate-600">
          {loading ? 'Loading...' : 'Delete'}
          </button>
          </div>
        ))}
      </div>
      </div>
      </div>
    </div>
  );
};

export default UploadWinner;
