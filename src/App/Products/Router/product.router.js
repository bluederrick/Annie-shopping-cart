import express from 'express';
import {
  AddProductsController,
  deleteProductController,
  productController
} from './product.controllers.js';
import { verifyToken } from '../../../Utilitiy/token.js';
import { adminAuthorized, authorizedUser } from '../../../Utilitiy/restrict.js';

const router = express.Router();
router.post('/createproduct', adminAuthorized, AddProductsController);

router.delete('/product/:id', adminAuthorized, deleteProductController);

// router.get('/categories/:categoryId/products', getProductsCategoryController);

export default router;
