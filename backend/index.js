import  Express  from "express";
const app = Express();
import userRoutes from "./routes/users.js"
import authRoutes from "./routes/auth.js"
import postRoutes from "./routes/posts.js"
import commentRoutes from "./routes/comments.js"
import likeRoutes from "./routes/likes.js"

app.use("/api/auth", authRoutes) 
app.use("/api/users", userRoutes) // put forward slash before starting the name of route.
app.use("/api/posts", postRoutes) 
app.use("/api/likes", likeRoutes) 
app.use("/api/comments", commentRoutes) 


app.listen(8800, ()=>{
    console.log("API working..!!");
})
