import mongoose from "mongoose";


const gallerySchema = new mongoose.Schema({
    image_url: {
        type: String, // cloudinary url
        required: [true , "Please uploade your Image"]
    },
     public_id:{
        type: String,
        required:true
     }

  
    
}, {timestamps: true})

const Gallery = mongoose.models.gallerys || mongoose.model("gallerys", gallerySchema)

export default Gallery