import mongoose from "mongoose";

export async function connect(){
    try {
        mongoose.connect(process.env.DETABASE_URI!)
        const connection = mongoose.connection

        connection.on('connected', () => {
            console.log('MongoDB connected');
        })

        connection.on('error' , (err) => {
            console.log('MonoDB Connection Error, Please make sure db is up and running:' + err);
            process.exit()
        })
        
    } catch (error) {
        console.log("Something went wrong in connecting DB");
        console.log(error)
    }
}