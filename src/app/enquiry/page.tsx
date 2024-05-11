"use client"

import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "@/components/Sidebar";
import { NextResponse } from "next/server";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudentData();
  }, []);

  const fetchStudentData = async () => {
    try {
      const response = await axios.get("/api/admin/student");
      setStudents(response.data.data);  
  
    } catch (error:any) {
      return NextResponse.json({error: error.message}, {status: 500})
    }
  };

  return (
    <div>
    <Sidebar/>
    <div className="p-4 sm:ml-64">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className='flex justify-center items-center min-h-screen'> 
          {students.length > 0 ? (
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
                    Mobile Number
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Call
                  </th>
                </tr>
              </thead>
              <tbody>
              {students.map((student: any) => (
                  <tr key={student._id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {student.studentname}
                    </td>
                    <td className="px-6 py-4">
                      {student.studentclass}
                    </td>
                    <td className="px-6 py-4">
                      {student.fathername}
                    </td>
                    <td className="px-6 py-4">
                      {student.email}
                    </td>
                    <td className="px-6 py-4">
                      {student.studentaddress}
                    </td>
                    <td className="px-6 py-4">
                      {student.mobilenumber}
                    </td>
                    <td className="px-6 py-4">
                      <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Copy Number</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default StudentList
