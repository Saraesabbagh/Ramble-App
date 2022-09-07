import { User } from '../models/user';
import { body, check, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import { WriteError } from 'mongodb';
import { CallbackError } from 'mongoose';
import bcrypt from 'bcrypt';

/**
 * Login page.
 * @route GET /api/user/details
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
