import mongoose from "mongoose";


const noticebordSchema = new mongoose.Schema({
    noticeBord:{
        type: String,
        required: [true, "Please provide a New Notice Message"]
    },
    postBy:{
        type: String,
        required: [true, "Please provide a New Notice Message"]
    },
   

  
    
}, {timestamps: true})

const Noticebord = mongoose.models.noticebords || mongoose.model("noticebords", noticebordSchema)

export default Noticebord