import { User } from "../models/user";
import { body, check, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";
import { WriteError } from "mongodb";
import { CallbackError } from "mongoose";

/**
 * Login page.
 * @route POST /api/signup
 */
export const saveUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  console.log(req.body);
  const user = new User(req.body);

  User.findOne({ email: req.body.email }, (err, users) => {
    if (err) {
      return next(err);
    }
    if (users) {
      console.log("Email exists already");
      res.send(JSON.stringify({ message: "Email exists already" }));
    } else {
      user.save((err) => {
        if (err) {
          return next(err);
        }
        res.send(JSON.stringify({ message: "Success" }));
      });
    }
  });
};
