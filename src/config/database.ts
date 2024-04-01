import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

export const connectDb = () => {
  const uri = <string>process.env.DB_URL
  mongoose
    .connect(uri)
    .then(() => console.log("connected to DB"))
    .catch((err) => console.error(err.message))
}
