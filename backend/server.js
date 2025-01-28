import express from 'express';
import 'dotenv/config';
import { connectDB } from './config/db.js';

import productRoutes from './routes/product.route.js';

// Initialising PORT from env to the PORT var
const PORT = process.env.PORT;
const URL = process.env.MONGO_URI;

// initialising express to the app..

const app = express();

// using middleware to parse body !
app.use(express.json());

// middleware to call routers...

app.use('/api/products', productRoutes);

// Starting the server

app.listen(PORT, async () => {
  await connectDB(URL);
  console.log(`Server started at ${PORT}`);
});
