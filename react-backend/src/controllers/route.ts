import { Request, Response } from 'express';
import { Route } from '../models/route';

export const saveRoute = (req: Request, res: Response) => {
  const route = new Route(req.body);

  route.save((err) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ message: 'Route was saved successfully!' });
  });
};

export const getRoutes = (req: Request, res: Response) => {
  Route.find().exec((err, routes) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    res.send(routes);
  });
};

export const addParticipant = (req: Request, res: Response) => {
  Route.findOneAndUpdate(
    { _id: req.body._id },
    {
      $push: {
        participants: { userId: req.body.userId },
      },
    },
    function (err) {
      if (err) {
        res.status(500).send({ message: err });
      }
      res.status(201).send({ message: 'Participant added!' });
    }
  );
};
