import mongoose from 'mongoose';
import 'dotenv/config';

const uri = process.env.MONGO_URI;
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

const connectDB = async () => {
    try {
        await mongoose.connect(uri, clientOptions);
        console.log("MongoDB connected successfully!");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1); // Exit if error
    }
}

// Close connection when exit server
process.on('SIGINT', async () => {
    await mongoose.disconnect();
    console.log("MongoDB connection closed.");
    process.exit(0);
});

export { connectDB };