import express from "express";
import morgan from "morgan";
import cors from "cors";

// importing database
import mongoose from "mongoose";
import {DATABASE} from "./config.js"
import authRoutes from "./routes/auth.js"

//connecting the database
mongoose.set('strictQuery',false);
mongoose.
    connect(DATABASE).
    then(()=> console.log("My-Room Database Connected Sucessfylly")).
    catch((err)=> console.log(err));


const app = express();

//middle wares
//applying middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//routes middlewares
app.use('/api',authRoutes)

app.listen(8000, ()=> console.log("Server running on port 8000"));