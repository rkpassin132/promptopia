import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is laready connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    isConnected = true;

    console.log("MongoDB Connected");
  } catch (error) {
    console.log("Mongodb connection error")
    console.log(error);
  }
};
