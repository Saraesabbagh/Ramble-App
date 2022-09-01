import express from 'express';
import mongoose from "mongoose";
import session from "express-session";
import bodyParser from "body-parser";
import path from "path";
import bluebird from "bluebird";
import flash from "express-flash"
import cookieParser from "cookie-parser"


// Controller (route Handlers)

import * as userController from "./controllers/user"

const app = express();
const port = 3001;

app.use(cookieParser());
app.use(flash());
app.use(session({
  key: "user_sid",
  secret: "super_secret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 1200000,
  }
}));
app.use(express.json())
app.use(bodyParser.json())
app.use(session());
app.use(express.static(path.join(__dirname, "/react-frontend")))

const mongoDbUrl =  "mongodb://0.0.0.0/Ramble";
mongoose.Promise = bluebird;

mongoose.connect(mongoDbUrl).then(
    () => { console.log("Database connection worked ")},
).catch(err => {
    console.log(`MongoDB connection error. Please make sure MongoDB is running. ${err}`);
    // process.exit();
});

/**
 * API Routes.
 */

 app.post("/api/signup", userController.saveUser )



 /**
 * Handles all other routes
 */


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "react-frontend/public/index.html"));
});



app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});