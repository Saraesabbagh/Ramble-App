import { User } from '../models/user';
import { Request, Response, NextFunction } from 'express';

export const checkDuplicateEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  User.findOne({
    email: req.body.email,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (user) {
      res.status(400).send({ message: 'Failed! Email is already in use!' });
      return;
    }
    next();
  });
};
