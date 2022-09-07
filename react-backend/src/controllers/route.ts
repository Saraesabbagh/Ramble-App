import { Request, Response, NextFunction } from 'express';
import { Route } from '../models/route';

export const saveRoute = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const route = new Route({});
};
