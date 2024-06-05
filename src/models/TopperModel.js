 import mongoose from "mongoose";

 const 	winnerSchema = new mongoose.Schema({
    image_url: {
        type: String,
        required: [true, "Please Upload Winner Student picture"]
    },
    public_id: {
        type: String,
        required: true
    },
    winner_name: {
        type: String,
        required: true
    },
    winner_rank: {
        type: String,
    },
    
    winner_message:{
        type: String,
        required: true
    }
 }, {timestamps: true})

 const Winner = mongoose.models.winners || mongoose.model("winners", winnerSchema)

 export default Winner