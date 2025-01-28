import express from 'express';

const router = express.Router();

import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from '../controllers/product.controller.js';

// routes

router.get('/', getAllProducts);

router.post('/', createProduct);

router.patch('/:id', updateProduct);

router.delete('/:id', deleteProduct);

export default router;
