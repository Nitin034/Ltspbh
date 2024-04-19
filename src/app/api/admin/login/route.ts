import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/adminModel";
import bcryptjs from 'bcryptjs';
import jwt from "jsonwebtoken";

connect()

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {email , passcode, password} = reqBody

        console.log(reqBody);

       const user = await User.findOne({email})
       if (!user){
        return NextResponse.json({error: "User does Not Exists"}, {status: 400})
       }

       console.log("User exits");

       const validPassword = await bcryptjs.compare(password, user.password)

       const validPassCode = await bcryptjs.compare(passcode, user.passcode)

       if (!(validPassword && passcode)){
        return NextResponse.json({error: "Check Your Credentials"}, {status: 400})
       }

       const tokenData = {
        id: user._id,
        email: user.email,
       }

       const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "1h"})

      const response = NextResponse.json({
        message: "Logged in Success",
        success: true
       })

       response.cookies.set("token", token, {httpOnly: true})

       return response 

    } catch (error: any) {
        return NextResponse.json({error: error.message},{status: 500})
    }
}