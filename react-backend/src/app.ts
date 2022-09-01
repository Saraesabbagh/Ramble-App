import express from 'express';
import mongoose from "mongoose";
import session from "express-session";
import bodyParser from "body-parser";
import path from "path";
import bluebird from "bluebird";
const app = express();
const port = 3001;

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

 app.get("/api/", )
 app.post("/api/signup",  )



 /**
 * Handles all other routes
 */


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "react-frontend/public/index.html"));
});



app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});