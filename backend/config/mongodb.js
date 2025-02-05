import mongoose from "mongoose";

const connectDB = async () => {
    

    try {
        mongoose.connection.on('connected', () => {
            console.log("DB Connected");
            
        })
    
        await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`)
    
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

export default connectDB