import express from "express";  
import dotenv from "dotenv";
import cors from "cors"
import userRouter from "./routes/userRoutes.js";

const app = express()
dotenv.config()

const PORT = process.env.PORT
app.use(express.json())
app.use(cors({
    credentials: true,
}))   

app.use('/',userRouter)

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})