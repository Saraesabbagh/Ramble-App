import { User } from '../models/user';
import { Request, Response } from 'express';

export const getDetails = async (
  req: Request,
  res: Response
): Promise<void> => {
  User.findOne({ _id: req.params._id }, (err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send(user);
  });
};
