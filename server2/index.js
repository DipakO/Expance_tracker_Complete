import express from "express";
import dotenv from "dotenv";
import Router from "./router/user.js";
import connectDB from "./config/user.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());

const port = 5000;
const DATABASE_URL = process.env.DATABASE_URL;

// Database Connection
connectDB(DATABASE_URL);

// JSON
app.use(express.json());

// Checks EndPoint And if matches then sends the router file
app.use("/user", Router);

app.listen(port, () => {
  console.log(`Server Starts On ${port}`);
});
