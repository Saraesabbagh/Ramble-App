import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';
import bluebird from 'bluebird';
import flash from 'express-flash';
import cookieSession from 'cookie-session';
import cors from 'cors';

import * as dotenv from 'dotenv';
dotenv.config();

// Controller (route Handlers)

import * as userController from './controllers/user';

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
app.use(express.static(path.join(__dirname, '/react-frontend')));

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

/**
 * API Routes.
 */

app.post('/api/signup', userController.saveUser);

/**
 * Handles all other routes
 */

app.get('*', (req, res) => {
  res.sendFile(
    path.join(__dirname, '..', '..', 'react-frontend/public/index.html')
  );
});

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to bezkoder application.' });
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
