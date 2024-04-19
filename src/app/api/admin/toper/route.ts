import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Toper from "@/models/ToperModel";

connect()


export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const{someText, toperImage, rank} = reqBody

        const newToper = new Toper({
            someText,
            toperImage,
            rank
        })

        const savedToper = await newToper.save()
        console.log(savedToper);

        return NextResponse.json({
            message: "Toper Detaile Successfully Saved",
            success: true,
            savedToper
        })
        
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}