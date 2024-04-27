import { connect } from "@/dbConfig/dbConfig";
import { DeleteImage, UploadImage } from "@/helpers/upload-image";
import { NextRequest, NextResponse } from "next/server";
import Gallery from "@/models/galleryModel";

connect();

export const DELETE = async(req:NextRequest,ctx:{params:{id:string}} )=> {

    const imagePublicId = `Ltspb-Images/` + ctx.params.id;

    const result_delete = await DeleteImage(imagePublicId)

     await Gallery.findOneAndDelete({public_id: imagePublicId});

    return NextResponse.json({
        msg: result_delete,
    },{status:200});
}
 