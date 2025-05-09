import mongoose from "mongoose";

export const connectToDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI || "");

  console.log(`MongoDB connected : ${conn.connection.host}`);
};
