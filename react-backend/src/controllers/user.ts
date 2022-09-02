import { User } from "../models/user"
import { body, check, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";
import { WriteError } from "mongodb";
import { CallbackError } from "mongoose";

/**
 * Login page.
 * @route POST /api/signup
 */
export const saveUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  // Validation checks
  // If authentication fails
  console.log(req.body)
  const user = new User(req.body);
  User.findOne({email: req.body.email}, (err, user) => {
    if (err) {return next(err)}
    if (user) {
      res.status(500)
    }

  })
  try {
    await user.save();
    res.status(200)
    res.json(user)
  }
  catch(err){
    console.log(err)
    res.status(500)
    res.redirect("/user/new")
  }
}


