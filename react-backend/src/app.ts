import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';
import bluebird from 'bluebird';
import cookieSession from 'cookie-session';
import cors from 'cors';

import * as dotenv from 'dotenv';
dotenv.config();

// Middleware Functions

import { checkDuplicateEmail } from './middlewares/verifySignUp';

// Controller

import * as authController from './controllers/auth';
import * as userController from './controllers/user';
import * as APIController from './controllers/map_box_api';
import * as routeController from './controllers/route';

const app = express();
const port = 3001;

const corsOptions = {
  origin: 'http://localhost:3001',
};

app.use(
  cookieSession({
    name: 'ramble-session',
    secret: process.env.SESSION_SECRET,
    httpOnly: true,
  })
);

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  express.static(path.join(__dirname, '..', '..', 'react-frontend/build'))
);

const mongoDbUrl = 'mongodb://0.0.0.0/Ramble';

mongoose.Promise = bluebird;

mongoose
  .connect(mongoDbUrl)
  .then(() => {
    console.log('Database connection worked ');
  })
  .catch((err) => {
    console.log(
      `MongoDB connection error. Please make sure MongoDB is running. ${err}`
    );
    // process.exit();
  });

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
  next();
});

/**
 * API Routes.
 */

// app.post("/api/signup", userController.saveUser);

app.post('/api/save_route', APIController.getMap);

app.get('/api/user/details', userController.getDetails);
app.get('/api/profile/:_id', userController.getDetails);
app.post('/api/signup', checkDuplicateEmail, authController.signUp);

app.post('/api/signin', authController.signIn);
app.post('/api/signOut', authController.signOut);

app.post('/api/routes', routeController.saveRoute);
app.post('/api/addParticipant', routeController.addParticipant);

app.get('/api/all_routes', routeController.getRoutes);

/**
 * Handles all other routes
 */

app.get('*', (req, res) => {
  res.sendFile(
    path.join(__dirname, '..', '..', 'react-frontend/public/index.html')
  );
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
