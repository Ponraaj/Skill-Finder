import express from "express"
import generateContent from "../controllers/aiController.js"

const userRouter = express.Router()

userRouter.post('/sendmessage',generateContent)


export default userRouter