import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Noticebord from "@/models/noticeBordModel";

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { noticeBord, postBy } = reqBody;

        const newNotice = new Noticebord({
            noticeBord,
            postBy,
            timestamp: new Date()  // Add timestamp when creating the notice
        });

        const savedNotice = await newNotice.save();
        // console.log(savedNotice);

        return NextResponse.json({
            message: "Notice Successfully Published",
            success: true,
            savedNotice
        });

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function GET(request: NextRequest) {
    try {
        const noticebord = await Noticebord.find();
        return NextResponse.json({
            message: "Details Found",
            data: noticebord
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { id } = reqBody;

        const deletedNotice = await Noticebord.findByIdAndDelete(id);
        if (!deletedNotice) {
            return NextResponse.json({ message: "Notice not found", success: false });
        }

        return NextResponse.json({
            message: "Notice Successfully Deleted",
            success: true
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
