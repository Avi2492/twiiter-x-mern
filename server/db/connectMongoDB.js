import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    const response = await mongoose.connect(process.env.MONGO_URI);
    console.log(`DB connected: ${response.connection.host}`);
  } catch (error) {
    console.log("Something wrong in db connection file", error.message);
    process.exit(1);
  }
};

export default connectMongoDB;
