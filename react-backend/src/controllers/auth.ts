import { config } from "../config/auth.config";
import { User } from "../models/user";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const signUp = (req, res) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });

  user.save((err) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ message: "User was registered successfully!" });
  });
};

export const signIn = (req: Request, res: Response) => {
  User.findOne(
    {
      email: req.body.email,
    },
    (err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if (!user) {
        return res.status(404).send({ message: "User not found." });
      }

      const validPassword = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!validPassword) {
        return res.status(401).send({ message: "Invalid Password!" });
      }

      const token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400,
      });

      req.session.token = token;
      res.status(200).send({
        id: user._id,
        email: user.email,
      });
    }
  );
};

export const signOut = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    req.session = null;
    return res.status(200).send({ message: "You've been signed out!" });
  } catch (err) {
    next(err);
  }
};
