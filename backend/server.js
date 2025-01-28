import express from 'express';
import 'dotenv/config';
import { connectDB } from './config/db.js';
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from './controllers/product.controller.js';

// Initialising PORT from env to the PORT var
const PORT = process.env.PORT;
const URL = process.env.MONGO_URI;

// initialising express to the app..

const app = express();

// using middleware to parse body !
app.use(express.json());

// routes

app.get('/api/products', getAllProducts);

app.post('/api/products', createProduct);

app.patch('/api/products/:id', updateProduct);

app.delete('/api/products/:id', deleteProduct);

// Starting the server

app.listen(PORT, async () => {
  await connectDB(URL);
  console.log(`Server started at ${PORT}`);
});
