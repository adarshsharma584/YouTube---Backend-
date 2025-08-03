import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { connectDB } from "./utils/dbConnect.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express ();
const PORT = process.env.PORT || 3000;

connectDB();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

//Routes
app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
