import { User } from "../models/user";
import { body, check, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";
import { WriteError } from "mongodb";
import { CallbackError } from "mongoose";
import bcrypt from "bcrypt";

/**
 * Login page.
 * @route POST /api/signup
 */

export const getDetails = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  User.findOne({ email: req.body.id }, (err, user) => {
    if (err) {
      return next(err);
    }
    res.send(JSON.stringify(user));
  });
};

export const validateUser = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      return next(err);
    }

    bcrypt.compare(req.body.password, user.password, function (err, isMatch) {
      if (err) {
        return next(err);
      }

      if (isMatch) {
        return user;
        // check with frontend what is best to return
      } else {
        res.redirect("/session/new");
      }
    });
  });
};
