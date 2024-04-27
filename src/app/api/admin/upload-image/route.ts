import { connect } from "@/dbConfig/dbConfig";
import { UploadImage } from "@/helpers/upload-image";
import { NextRequest, NextResponse } from "next/server";
import Gallery from "@/models/galleryModel";

connect();

export const GET = async(req:NextRequest)=> {
    const Images = await Gallery.find({});

    return NextResponse.json({
        Images: Images,
        total: Images.length
    },{status:200});
}
export const POST = async(req:NextRequest)=> {
    const formData = await req.formData();

    const image = formData.get("image") as unknown as File;
    
    const data:any = await UploadImage(image, "Ltspb-Images")

     await Gallery.create({
        image_url: data?.secure_url,
        public_id: data?.public_id,
    
     })

    return NextResponse.json({ msg: data}, {
        status: 200
    });
}