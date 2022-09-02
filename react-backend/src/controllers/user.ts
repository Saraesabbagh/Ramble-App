import { User } from '../models/user';
import { body, check, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import { WriteError } from 'mongodb';
import { CallbackError } from 'mongoose';
import bcrypt from 'bcrypt';

/**
 * Login page.
 * @route POST /api/signup
 */
export const saveUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  // Validation checks
  // If authentication fails
  console.log(req.body);
  const user = new User(req.body);
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      return next(err);
    }
    if (user) {
      res.status(500);
    }
  });
  try {
    await user.save();
    res.status(200);
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500);
    res.redirect('/user/new');
  }
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
        res.redirect('/session/new');
      }
    });
  });
};
