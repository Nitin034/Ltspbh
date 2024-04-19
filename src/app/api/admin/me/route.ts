import { connect } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/adminModel";
import { NextRequest, NextResponse } from "next/server";

connect()

export async function POST(request: NextRequest){
 
       const userId = await getDataFromToken(request)
      const user = await User.findOne({_id: userId}).select("-password -passcode")
       return NextResponse.json({
        message: "User found",
        data: user
       })
}