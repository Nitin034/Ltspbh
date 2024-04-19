import mongoose from "mongoose";


const toperSchema = new mongoose.Schema({
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

const Toper = mongoose.models.topers || mongoose.model("topers", toperSchema)

export default Toper