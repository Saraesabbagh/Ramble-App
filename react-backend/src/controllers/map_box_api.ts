import { Request, Response, NextFunction } from "express";


/**
 * Login page.
 * @route POST /api/route
 */

export const getRoute = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

  const start_coordinates = req.body.start_coordinates
  const end_coordinates = req.body.end_coordinates

}
)