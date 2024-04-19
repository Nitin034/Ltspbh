import mongoose from "mongoose";

const adminloginSchema = new mongoose.Schema({
    email:{
        type: String,
        required: [true, "Please Enter Only Admin Email"]

    },
    password:{
        type: String,
        required: [true, "Please Enter Password"]
    },
    passcode:{
        type: String,
        required: [true, "Please Enter Your uniquePassCode"]
    },
    isVerified:{
        type: Boolean,
        required: [false, "Please Verified your email first"]
    },
    isAdmin: {
        type: Boolean,
        required: [false, "You are Not an admin"]
    },  

    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenEpiry: Date
},
{
    timestamps: true
}) 

const User = mongoose.models.users || mongoose.model("users", adminloginSchema)

export default User