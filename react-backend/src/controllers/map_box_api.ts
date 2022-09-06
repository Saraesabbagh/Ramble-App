import { Request, Response, NextFunction } from "express";

/**
 *
 * @route POST /api/route
 */

export const getRoute = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const start_coordinates = req.body.start_coordinates;
  const end_coordinates = req.body.end_coordinates;
};

/**
 *
 * @route POST /api/static
 */

export const getStaticMap = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const URL = "Test";

  fetch(URL)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.error("Error: ", err));
};
