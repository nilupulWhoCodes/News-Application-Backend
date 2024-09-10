// db.js
import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://nilupul:80803030Nilupul@cluster0.9ktnq.mongodb.net/news?retryWrites=true&w=majority&appName=Cluster0",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};
