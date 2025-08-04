import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { connectDB } from "./utils/dbConnect.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import watchLaterRouter from "./routes/watchLater.route.js";
import likedVideosRouter from "./routes/likedVideos.route.js";




const app = express ();
const PORT = process.env.PORT || 3000;

connectDB();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

//Routes
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/watch-later", watchLaterRouter);
app.use("/api/liked-videos", likedVideosRouter);





app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
