import express from 'express';
import {
  AddProductsController,
  deleteProductController,
  productController
} from './product.controllers.js';
import { verifyToken } from '../../utilitiy/token.js';
import { authorizedUser } from '../../utilitiy/restrict.js';

const router = express.Router();

// router.get('/Allproducts', productController);

router.post('/createproduct', AddProductsController);

router.delete(
  '/product/:id',
  // restrictUsersAuthentication_(),
  authorizedUser,
  deleteProductController
);

export default router;
