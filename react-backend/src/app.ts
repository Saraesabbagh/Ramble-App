import express from 'express';
import mongoose from "mongoose";
import session from "express-session";
import bodyParser from "body-parser";
import path from "path";
import bluebird from "bluebird";
const app = express();
const port = 3000;

const mongoDbUrl =  "mongodb://0.0.0.0/Ramble";
mongoose.Promise = bluebird;

mongoose.connect(mongoDbUrl).then(
    () => { console.log("Database connection worked ")},
).catch(err => {
    console.log(`MongoDB connection error. Please make sure MongoDB is running. ${err}`);
    // process.exit();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});