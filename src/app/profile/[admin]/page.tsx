'use client'

import React from 'react'

export default function page({params}: any) {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
        <h1>Profile Page</h1>

        <h2 className='p-3 bg-slate-500'>{params.admin}</h2>
      
    </div>
  )
}

 
