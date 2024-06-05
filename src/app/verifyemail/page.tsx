'use client'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function VerifyEmailPage() {
   const [token, setToken] = useState("")
   const [verified, setVerified] = useState(false)
   const [error, setError] = useState(false)

   const verifyUserEmail = async () =>{
     try {
        await axios.post("/api/admin/verifyemail" , {token})
        setVerified(true)
        setError(false)
     } catch (error: any) {
        setError(true)
        // console.log(error.response.data);  
     }
   }

   useEffect(() => {
    setError(false)
    const urlToken = window.location.search.split("=")[1]
    setToken(urlToken || "")
   },[])

   useEffect(() => {
    setError(false)
       if(token.length > 0){
        verifyUserEmail()
       }
   },[token])

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
       <h2>Verify Email</h2>
    <h2>{token ? `${token}`: "No token"}</h2>
    <h2>
        {verified && (
            <div>
                <h2>Verified</h2>
                <Link href="/login">Login</Link>
            </div>

        )}
        {error && (
            <div>
                <h2>Error</h2>
            </div>

        )}
    </h2>
    </div>
  )
}


