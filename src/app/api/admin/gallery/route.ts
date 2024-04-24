import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Gallery from "@/models/galleryModel";
// import {uploadOnCloudinary} from "@/helpers/cloudinary.js"

connect()


export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        // const{favImage, videoFile} = reqBody

        const imageLocalPath = reqBody.files?.favImage[0]?.path;
        const videoLocalPath = reqBody.files?.videoFile[0]?.path;

        if(!imageLocalPath && videoLocalPath){
            return NextResponse.json({error: "image file not uploded"}, {status: 400})
        }

        // const favImage = await uploadOnCloudinary(imageLocalPath);
        // const videoFile = await uploadOnCloudinary(videoLocalPath);

        // if(!favImage && videoFile){
        //     return NextResponse.json({error: "Image File Is Required"})
        // }

        const newGallery = await Gallery.create({

            // favImage ,
            // videoFile,
        })

        const createdGallery = await newGallery.save()
        console.log(createdGallery);

        return NextResponse.json({
            message: "Image Successfully Added ",
            success: true,
            createdGallery
        })

        
    } catch (error: any) {
        return NextResponse.json({error: error.message},{status: 500})
    }
}