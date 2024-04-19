import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Noticebord from "@/models/noticeBordModel"

connect()

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const{ noticeBord, postBy} = reqBody

        const newNotice = new Noticebord({
            noticeBord,
            postBy
        })
        
        const savedNotice = await newNotice.save()
        console.log(savedNotice);

        return NextResponse.json({
            message: "Notise Successfully Publised",
            success: true,
            savedNotice
        })

    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}