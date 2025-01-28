import express from 'express';
import 'dotenv/config';

// Initialising PORT from env to the PORT var
const PORT = process.env.PORT;

// initialising express to the app..

const app = express();

// Starting the server

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
