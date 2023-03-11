import express from "express";
import morgan from "morgan";
import cors from "cors";

// importing database
import mongoose from "mongoose";
import {DATABASE} from "./config.js"

// routes
import authRoutes from "./routes/auth.js"

//connecting the database
mongoose.set('strictQuery',false);
mongoose.
    connect(DATABASE).
    then(()=> console.log("My-Room Database Connected Sucessfylly")).
    catch((err)=> console.log(err));

//Store express method in app variable
const app = express();

//applying middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//routes middlewares
app.use("/api",authRoutes);


app.listen(8000, ()=> console.log("Server Running sucessfully on 8000 port"));