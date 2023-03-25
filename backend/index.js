import  Express  from "express";
const app = Express();
import * as dotenv from 'dotenv' 
dotenv.config()
import mongoose from 'mongoose';
import userRoutes from "./routes/users.js"
import authRoutes from "./routes/auth.js"
import postRoutes from "./routes/posts.js"
import commentRoutes from "./routes/comments.js"
import likeRoutes from "./routes/likes.js"

const DB = process.env.DB_LINK;
const port = process.env.PORT || 8080;

app.use("/api/auth", authRoutes) 
app.use("/api/users", userRoutes) // put forward slash before starting the name of route.
app.use("/api/posts", postRoutes) 
app.use("/api/likes", likeRoutes) 
app.use("/api/comments", commentRoutes) 

mongoose.connect(DB)
    .then(()=>{
        console.log(`connection to db sucessful`);
    }).catch((err)=>console.log(err))


app.listen(port, ()=>{
    console.log(`Server is running on Port no: ${port}`);
})
