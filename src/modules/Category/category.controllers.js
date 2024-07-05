import mongoose from 'mongoose';
import {
  addCategoryService,
  categoryDetails,
  categoryListService,
  isCategoryVoid,
  updateCategoryService
} from './category.services.js';

export const addCategoryControllers = async (req, res) => {
  const { title, icon, isFeatured, isVoided } = req.body;
  const addedCategory = await addCategoryService({
    title,
    icon,
    isFeatured,
    isVoided
  });
  console.log(addedCategory);
  if (!addedCategory) {
    return res.status(403).json({
      message: 'Category not added',
      Type: false,
      addedCategory
    });
  }
  return res.status(201).json({
    message: 'Category added successfully',
    Type: true,
    addedCategory
  });
};

export const deleteCategoryControllers = async (req, res) => {
  const { id } = req.params;
  console.log(mongoose.Types.ObjectId.isValid(id));
  const { isVoided } = req.body;
  const categoryDeleteVoid = await isCategoryVoid(id, isVoided);

  if (!categoryDeleteVoid) {
    return res.status(403).json({
      messgae: 'category not voided',
      Type: false,
      response: categoryDeleteVoid
    });
  }
  return res.status(200).json({
    message: ' successfully deleted',
    response: categoryDeleteVoid
  });
};

export const categoryListControllers = async (req, res) => {
  const allCategoryList = await categoryListService();

  if (!allCategoryList) {
    return res.status(404).send('No category list found');
  }

  return res.status(200).json({
    message: 'category List was found successfully ',
    allCategoryList
  });
};

export const categoryController = async (req, res) => {
  const { categoryid } = req.params;
  const details = await categoryDetails(id);
  if (details && details === undefined) {
    return res.status(404).send({ message: 'No category details found' });
  }
  return res.status(200).send({ message: 'Category details found', details });
};

export const updateCategoryControllers = async (req, res) => {
  const { id } = req.params;
  const updateCategory = await updateCategoryService(id);
  if (updateCategory) {
    return res.status(400).send('Update category failed');
  }
  return res.status(200).json({
    message: 'Category updated successfully',
    updatedCategory: updatedCategory
  });
};
