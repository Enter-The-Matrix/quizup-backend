import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectToMongoDB = async () => {
  try {
    const connectInstance = await mongoose.connect(
      `${process.env.MONGO_DB_URI}/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log(
      `MongoDB connected! DB HOST:${connectInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB connection FAILED", error);
    process.exit(1);
  }
};

export { connectToMongoDB };
