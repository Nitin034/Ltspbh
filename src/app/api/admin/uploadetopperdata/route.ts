import mongoose from "mongoose";
import Topper from "@/models/TopperModel";
import { connect } from "@/dbConfig/dbConfig";
import { DeleteImage } from "@/helpers/upload-image";

connect();
 
export async function fetchTopperData() {
    try {
        const toppers = await Topper.find();
        return toppers;
    } catch (error:any) {
        throw new Error('Error fetching topper data:', error);
    }
}

// Delete topper data
export async function deleteTopperData(topperId :any) {
    try {
        const deletedTopper = await Topper.findByIdAndDelete(topperId);
        // Delete image from Cloudinary
        await DeleteImage(deletedTopper.public_id);
        return deletedTopper;
    } catch (error:any) {
        throw new Error('Error deleting topper data:', error);
    }
}
