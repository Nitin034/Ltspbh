'use client'
import Sidebar from '@/components/Sidebar'
import React, { useState } from 'react'

export default function EnquiryPage() {
  return (
    <div>
      <Sidebar/>
      <div className="p-4 sm:ml-64">
   <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  <div className='flex justify-center items-center min-h-screen'> 
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Student Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Class
                </th>
                <th scope="col" className="px-6 py-3">
                    Father Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Address
                </th>
                <th scope="col" className="px-6 py-3">
                    Mobile Numbar
                </th>
                <th scope="col" className="px-6 py-3">
                    Call
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Student Name
                </th>
                <td className="px-6 py-4">
                    Class
                </td>
                <td className="px-6 py-4">
                    Father Name
                </td>
                <td className="px-6 py-4">
                    Email
                </td>
                <td className="px-6 py-4">
                    Address
                </td>
                <td className="px-6 py-4">
                    Mobile Number
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Copy Number</a>
                </td>
             
                
            </tr>
        </tbody>
    </table>
</div>
</div>
</div>
    </div>
    </div>
  )
}

 
