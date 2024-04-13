import express from 'express';
import {
  AddProductsController,
  deleteProductController,
  productController
} from './product.controllers';
import { verifyToken } from '../../utilitiy/token';
import restrictUsersAuthentication_, {
  authorizedUser
} from '../../utilitiy/restrict';

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
