import { connect } from "@/dbConfig/dbConfig";
import { UploadImage } from "@/helpers/upload-image";
import { NextRequest, NextResponse } from "next/server";
import Winner from "@/models/TopperModel";

connect();

export const GET = async (request: NextRequest) => {
    const Winners = await Winner.find({});
    return NextResponse.json(
        {
            winners: Winners,
            total: Winners.length,
        }, {status: 200}
    );
};

export const POST = async (request: NextRequest) => {
    try {
        const formData = await request.formData();
        const winnerFile = formData.get("winner") as File | null;

        if (!winnerFile) {
            throw new Error("Winner file is missing in the request.");
        }

        const imageData: any = await UploadImage(winnerFile, 'Winner-Image');

        const reqBody = {
            winner_name: formData.get("winner_name"),
            winner_rank: formData.get("winner_rank"),
            winner_message: formData.get("winner_message"),
        };

        if (!reqBody.winner_name || !reqBody.winner_rank || !reqBody.winner_message) {
            throw new Error("Incomplete form data: Missing winner_name, winner_rank, or winner_message.");
        }

        const winnerData = await Winner.create({
            winner_name: reqBody.winner_name,
            winner_rank: reqBody.winner_rank,
            winner_message: reqBody.winner_message,
            image_url: imageData?.secure_url,
            public_id: imageData?.public_id,
        });

        // console.log(winnerData);

        return NextResponse.json({
            message: "Student Data Successfully Saved",
            success: true,
            winnerData,
        });

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
