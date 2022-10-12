import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { config } from '../config/auth.config';

interface GetUserAuthInfoRequest extends Request {
  userId: string;
}

export const verifyToken = (
  req: GetUserAuthInfoRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.session.token;
  if (!token) {
    return res.status(403).send({ message: 'No token provided!' });
  }
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: 'Unauthorized' });
    }
    req.userId = decoded.id;
    next();
  });
};
