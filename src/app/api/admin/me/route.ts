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

export async function GET(request: NextRequest){
       try {
            const user = await User.find();
            return NextResponse.json({
              message: "Details Founded",
              data: user
            })
       } catch (error: any) {
              return NextResponse.json({error: error.message}, {status: 500})
        
       }
}

export async function DELETE(request: NextRequest){
       try{
              const reqBody = await request.json();
              const {id} = reqBody;

              const deleteAccount = await User.findByIdAndDelete(id);
              if(!deleteAccount){
                     return NextResponse.json({ message: "User not found", success: false });
              }
      
              return NextResponse.json({
                  message: "User Successfully Deleted",
                  success: true
              });
       } catch (error: any) {
              return NextResponse.json({ error: error.message }, { status: 500 });
       }
}