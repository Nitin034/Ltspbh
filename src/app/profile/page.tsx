'use client'
import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useRouter } from "next/navigation";
import toast from 'react-hot-toast'
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import { NextResponse } from "next/server";

interface AdminData {
    _id: string;
    email: string;
    password: string;
    timestamp: string;
    isVerified: boolean;
}

export default function Profilepage() {
    const router = useRouter()

    const [adminData, setAdminData] = useState<AdminData[]>([]);
    const [data, setData] = useState<string>("nothing");

    useEffect(() => {
        fetchAdminData();
    }, []);

    const fetchAdminData = async () => {
        try {
            const response = await axios.get("/api/admin/me");
            setAdminData(response.data.data)
        } catch (error: any) {
            toast.error('Error fetching admin data');
        }
    }

    const getUserDetails = async () => {
        try {
            const res = await axios.post("/api/admin/me")
            // console.log(res.data);
            setData(res.data.data._id)
        } catch (error: any) {
            toast.error('Error getting user details');
        }
    }

    const logout = async () => {
        try {
            await axios.get('/api/admin/logout')
            toast.success("Logout successful");
            router.push('/login');
        } catch (error: any) {
            toast.error('Error logging out');
        }
    }

    const promptForPasscode = async () => {
        const userPasscode = prompt("Please enter the passcode to delete your account:");
        if (userPasscode === process.env.NEXT_PUBLIC_PASSCODE_KEY) {
            return true;
        } else {
            toast.error("Incorrect passcode. Account deletion canceled.");
            return false;
        }
    }

    const deleteAccount = async (id: string) => {
        const isPasscodeValid = await promptForPasscode();
        if (!isPasscodeValid) {
            return;
        }

        try {
            const response = await axios.delete(`/api/admin/me`, {
                data: { id },
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.data.success) {
                setAdminData(adminData.filter(user => user._id !== id));
                toast.success('Account deleted successfully');
            } else {
                toast.error(response.data.message);
            }
        } catch (error: any) {
            toast.error('Error deleting account');
        }
    }

    return (
        <>
            <Sidebar />
            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    <div className="bg-gray-200 ">
                        <h1 className="text-black flex justify-center items-center mx-auto font-extrabold text-3xl pt-10">Your All Profile</h1>
                        <div>
                            {adminData.map((user: AdminData) => (
                                <div className="mx-4 my-5" key={user._id}>
                                    <h1 className="text-black font-medium mx-4 my-2 pt-10">User Name : <span className="text-gray-700 font-normal">{user.email}</span> </h1>
                                    <h1 className="text-black font-medium mx-4 my-2 ">User Email : <span className="text-gray-900 font-normal">{user.email}</span></h1>
                                    <h1 className="text-black font-medium mx-4 my-2">Password :<button className="bg-amber-300 mx-3 rounded-lg hover:bg-yellow-500 px-2 py-1">{user.password}</button> </h1>
                                    <h1 className="text-black font-medium mx-4 my-2 ">User Password Last change :<span className="text-gray-900 font-normal mx-2">{user.timestamp}</span> </h1>
                                    <h1 className="text-black font-medium mx-4 my-2">Password Change :<button className="bg-amber-300 mx-3 rounded-lg hover:bg-yellow-500 px-2 py-1">Change Password</button> </h1>
                                    <h1 className="text-black font-medium mx-4 my-2">User Last Login :<span className="text-gray-900 font-normal mx-2">2h ago</span> </h1>
                                    <h1 className="text-black font-medium mx-4 my-2">User Verification :<span className="text-gray-900 font-normal mx-2">{user.isVerified}</span><button className="bg-amber-300 mx-3 rounded-lg hover:bg-yellow-500 px-2 py-1">Verify your email</button> </h1>
                                    <h1 className="text-black font-medium mx-4 my-2">User Last Update :<span className="text-gray-900 font-normal mx-2">1 month ago</span> </h1>
                                    <h1 className="text-black font-medium mx-4 my-2">User Details :<span className="text-gray-900 font-normal mx-2">{data === "nothing" ? "Nothing" : <Link href={`/profile/${data}`}>{data}</Link>}</span><button className="bg-amber-300 mx-3 rounded-lg hover:bg-yellow-500 px-2 py-1" onClick={getUserDetails}>Get Details</button></h1>
                                    <h1 className="text-black font-medium mx-4 my-2">Admin Dashboard access :<span className="text-green-400 font-normal mx-2">Yes</span> </h1>
                                    <h1 className="text-black font-medium mx-4 my-2">Gallery access :<span className="text-green-400 font-normal mx-2">Yes</span> </h1>
                                    <h1 className="text-black font-medium mx-4 my-2">Notice Board access :<span className="text-green-400 font-normal mx-2">Yes</span> </h1>
                                    <h1 className="text-black font-medium mx-4 my-2">Winner Board access :<span className="text-green-400 font-normal mx-2">Yes</span> </h1>
                                    <h1 className="text-black font-medium mx-4 my-2">Enquiry access :<span className="text-green-400 font-normal mx-2">Yes</span> </h1>
                                    <h1 className="text-black font-medium mx-4 my-2">Contact access :<span className="text-green-400 font-normal mx-2">Yes</span> </h1>
                                    <h1 className="text-black font-medium mx-4 my-2">Google Map access :<span className="text-green-400 font-normal mx-2">Yes</span> </h1>
                                    <h1 className="text-black font-medium mx-4 my-2">Delete Account Permanently:<button className="bg-red-400 mx-3 rounded-lg hover:bg-red-600 px-2 py-1" onClick={() => deleteAccount(user._id)}>Delete Account</button> </h1>
                                </div>
                            ))}
                        </div>
                        <button className="bg-teal-400 p-2 mx-2 my-3 rounded-md hover:bg-teal-600 text-black font-bold" onClick={logout}>Logout</button>
                    </div>
                </div>
            </div>
        </>
    )
}
