import { Request, Response } from "express"
import { IUser, userModel as User } from "../model/user.model"

export class UserController {
  static async registerUser(req: Request, res: Response) {
    try {
      const { firstName, lastName, email, password }: IUser = req.body

      const foundEmail = await User.findOne({ email })

      if (foundEmail) {
        res.status(400).json({
          success: false,
          message: "Email already exists",
        })
      }
      const user = await User.create({
        firstName,
        lastName,
        email,
        password,
      })
      res.status(201).json({ message: "user created!", user })
    } catch (error: unknown) {
      res.status(500).json({ message: error })
    }
  }
}
