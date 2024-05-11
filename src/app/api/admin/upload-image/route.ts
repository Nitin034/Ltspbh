import { connect } from '@/dbConfig/dbConfig';
import { UploadImage, DeleteImage } from '@/helpers/upload-image';
import { NextRequest, NextResponse } from 'next/server';
import Image from '@/models/galleryModel';

connect();

export const GET = async (req: NextRequest) => {
    const Images = await Image.find({});
    return NextResponse.json(
        {
            images: Images,
            total: Images.length,
        },
        { status: 200 }
    );
};

export const POST = async (req: NextRequest) => {
    const formData = await req.formData();
    const image = formData.get('image') as unknown as File;

    const data: any = await UploadImage(image, 'Ltspb-Images');

    await Image.create({
        image_url: data?.secure_url,
        public_id: data?.public_id,
    });

    return NextResponse.json({ msg: data }, { status: 200 });
};