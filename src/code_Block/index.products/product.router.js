import express from 'express';
import {
  AddProductsController,
  deleteProductController,
  productController
} from './product.controllers.js';
import { verifyToken } from '../../utilitiy/token.js';
import { adminAuthorized, authorizedUser } from '../../utilitiy/restrict.js';

const router = express.Router();

// router.get('/Allproducts', productController);

router.post('/createproduct', adminAuthorized, AddProductsController);

router.delete('/product/:id', adminAuthorized, deleteProductController);

export default router;
