import mongoose from "mongoose";


const imageSchema = new mongoose.Schema({
    image_url: {
        type: String, // cloudinary url
        required: [true , "Please uploade your Image"]
    },
     public_id:{
        type: String,
        required:true
     }

  
    
}, {timestamps: true})

const Image = mongoose.models.images || mongoose.model("images", imageSchema)

export default Image