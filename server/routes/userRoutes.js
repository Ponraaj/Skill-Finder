import express from "express"
import generateContent from "../controllers/aiController.js"

const userRouter = express.Router()

userRouter.post('/sendmessage',generateContent)
userRouter.get('/',(req,res)=>{
    res.status(200).send(
        "Server Running"
    )
})


export default userRouter