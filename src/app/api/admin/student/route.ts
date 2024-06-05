import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Student from "@/models/studentModel";

connect()


export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const{studentname,fathername , email, studentclass, mobilenumber, studentaddress} = reqBody

        const newStudent = new Student({
           studentname,
           fathername,
           email,
           studentclass,
           mobilenumber,
           studentaddress,
        })

        const savedStudent = await newStudent.save()
        // console.log(savedStudent);

        return NextResponse.json({
            message: "Student Data Successfully Saved",
            success: true,
            savedStudent
        })
        
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}

export async function GET(request: NextRequest){
    try {
        const student = await Student.find();
        return NextResponse.json({
            message: "Detaile found",
            data: student
        })
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
        
    }
}