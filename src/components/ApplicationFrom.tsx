"use client";
import React, { useEffect, useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/utils/cn";
import axios from "axios";
import toast from "react-hot-toast";
 

export function ApplicationFrom() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const [student, setStudent] = useState({
    studentname: "",
    studentclass: "",
    fathername: "",
    email: "",
    mobilenumber: "",
    studentaddress: "",
  })

  const [buttonDisabled, setButtonDisabled] = useState(false)
  const[loading, setLoading] = useState(false)

  const onSubmit = async () => {
    try {
      setLoading(true)
      const response = await axios.post("/api//admin/student", student)
      console.log("Your Enquiry Successfully Added" , response.data);
      // window.location.reload();
      
      
    } catch (error : any) {
      console.log("Your Enquiry Added failed")
      toast.error(error.message)
       
    }
  }

  useEffect(() => {
    if(student.studentname.length > 0 && student.fathername.length > 0 && student.email.length > 0 && student.mobilenumber.length > 0){
      setButtonDisabled(false)
    }else {
      setButtonDisabled(true)
    }
  }, [student])

  

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input relative bg-white/80 dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        ADMISSIONS OPEN FOR 24-25
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
         Please fill the below admission enquiry form
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="Name">Student Name</Label>
            <Input id="firstname" value={student.studentname} onChange={(e) => setStudent({...student, studentname: e.target.value})}placeholder="Student Name*" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="Classname">Seeking Admission in Class</Label>
            <Input id="class" value={student.studentclass} onChange={(e) => setStudent({...student, studentclass: e.target.value})}placeholder="LKG*" type="text" />
          </LabelInputContainer>
        </div>
          <LabelInputContainer>
            <Label htmlFor="Name">Father Name</Label>
            <Input id="fathername" value={student.fathername} onChange={(e) => setStudent({...student, fathername: e.target.value})} placeholder="Father Name*" type="text" />
          </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Enter Email Address</Label>
          <Input id="email" value={student.email} onChange={(e) => setStudent({...student, email: e.target.value})} placeholder="Email(Father)*" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
        <Label htmlFor="number">Enter Mobile Number</Label>
          <Input id="number" value={student.mobilenumber} onChange={(e) => setStudent({...student, mobilenumber: e.target.value})} placeholder="Mobile Number(Father)*" type="number" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
        <Label htmlFor="number">Enter Your Address</Label>
          <Input id="address" value={student.studentaddress} onChange={(e) => setStudent({...student, studentaddress: e.target.value})} placeholder="Address*" type="text" />
        </LabelInputContainer>
        
        

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit" onClick={onSubmit}
        >
           {buttonDisabled ? "Enter Your Detaile" : "Submit"}
          <BottomGradient />
        </button>
 
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
