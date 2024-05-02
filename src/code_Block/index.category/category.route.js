import express from 'express';
import {
  addCategoryControllers,
  categoryListControllers,
  deleteCategoryControllers,
  updateCategoryControllers
} from './category.controllers.js';

const router = express.Router();

router.post('/create-category', addCategoryControllers);

router.delete('/:id', deleteCategoryControllers);

router.put('/category/:_id', updateCategoryControllers);

// CATEGORY LIST

router.get('/categorylist', categoryListControllers);

export default router;
