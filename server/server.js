import express from "express";
import authRoutes from "./routes/auth.routes.js";
import dotenv from "dotenv";
import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Regular function to run in between before you do anything between req and response
app.use(express.json());

// to parse data urlencoded
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.listen(PORT, () => {
  console.log(`Server is running on Port: localhost:${PORT}`);
  connectMongoDB();
});
