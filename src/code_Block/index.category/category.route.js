import express from 'express';
import {
  addCategoryControllers,
  deleteCategoryControllers,
  updateCategoryControllers
} from './category.controllers';

const router = express.Router();

router.post('/category', addCategoryControllers);

router.delete('/:categoryid', deleteCategoryControllers);

router.put('/category/:categoryid', updateCategoryControllers);

// CATEGORY LIST

router.get('/categorylist', categoryListControllers);
