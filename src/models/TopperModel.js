import mongoose from "mongoose";


const topperSchema = new mongoose.Schema({
    topperName: {
        type: String,
        required: [true, "Please Write topper Name"]
    },
    someText: {
        type: String,
        required: [true, "Please Write A Message for Student"]
    },
    toperImage: {
        type: String, // cloudinary url
        required: [true , "Please uploade Toper beautifull Image"]
    },
    rank:{
       type: Number,
    },  
    
}, {timestamps: true})

const Topper = mongoose.models.toppers || mongoose.model("toppers", topperSchema)

export default Topper