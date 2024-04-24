import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Topper from "@/models/TopperModel";

connect()


export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const{topperName, someText, toperImage, rank} = reqBody

        const newTopper = new Topper({
            someText,
            topperName,
            toperImage,
            rank,
        })

        const savedTopper = await newTopper.save()
        console.log(savedTopper);

        return NextResponse.json({
            message: "Toper Detaile Successfully Saved",
            success: true,
            savedTopper
        })
        
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}