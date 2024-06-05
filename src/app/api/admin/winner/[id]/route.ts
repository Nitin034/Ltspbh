import { connect } from "@/dbConfig/dbConfig";
import { DeleteImage } from "@/helpers/upload-image";
import { NextRequest, NextResponse } from "next/server";
import Winner from "@/models/TopperModel";

connect();


export const DELETE = async (request: NextRequest, ctx: { params: {id: string}}) => {
    const winnerPublicId = "Winner-Image/" + ctx.params.id;
    const result_delete = await DeleteImage(winnerPublicId);

    await Winner.findOneAndDelete({public_id: winnerPublicId});

    return NextResponse.json(
        {
            msg: result_delete,
        },{ status: 200 }
    )
};