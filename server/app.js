import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"; // Import the cors package
import userRoutes from "./routes/users/users.js";
import { connectToDB } from "./db.js";

dotenv.config();

const app = express();

// Connect to MongoDB
connectToDB();

// Middleware
app.use(
  cors({
    origin: `${process.env.ORIGIN_URI}`, // Allow requests from this origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow these HTTP methods
  })
);
app.use(express.json());

// Routes
app.use("/users", userRoutes);

export default app;
