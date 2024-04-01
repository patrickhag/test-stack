import express, { Request, Response } from "express"
import dotenv from "dotenv"
import { userRoutes } from "./routes/user.routes"
import { connectDb } from "./config/database"
import cors from "cors"

dotenv.config()
const app = express()

app.use(express.json())
app.use("/user", userRoutes)

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
}
app.use(cors(corsOptions))

connectDb()

const port = process.env.PORT || 3004

app.listen(port, () => console.log(`listening on port ${port}`))
