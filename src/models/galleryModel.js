import mongoose from "mongoose";


const gallerySchema = new mongoose.Schema({
    favImage: {
        type: String, // cloudinary url
        required: [true , "Please uploade your beautifull Image"]
    },
    videoFile: {
        type: String, // cloudinary url
    },

  
    
}, {timestamps: true})

const Gallery = mongoose.models.gallerys || mongoose.model("gallerys", gallerySchema)

export default Gallery