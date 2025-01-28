import express from 'express';
import 'dotenv/config';
import { connectDB } from './config/db.js';

// Initialising PORT from env to the PORT var
const PORT = process.env.PORT;
const URL = process.env.MONGO_URI;
// initialising express to the app..

const app = express();

// Starting the server

app.listen(PORT, () => {
  connectDB(URL);
  console.log(`Server started at ${PORT}`);
});
