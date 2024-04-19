import mongoose from "mongoose";


const studentSchema = new mongoose.Schema({
    studentname:{
        type: String,
        required: [true, "Please provide a Student Name"]
    },
    studentclass:{
        type: String,
        required: [true, "Please Select Your child class"]
    },
    fathername:{
        type: String,
        required: [true, "Please provide a Student Father Name"]
    },
    email:{
        type: String,
        required: [true, "Please provide an Email"]
    },
    mobilenumber:{
        type: Number,
        required: [true, "Please provide an active MobileNumber"]
    },
    studentaddress:{
        type: String,
    },
    
})

const Student = mongoose.models.students || mongoose.model("students", studentSchema)

export default Student