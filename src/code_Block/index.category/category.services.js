import Category from '../../Models/Category.js';
import { categoryValidator } from './category.validator.js';

export const addCategoryService = async (data) => {
  const categoryDTO = await categoryValidator.validate(data);
  console.log(categoryDTO);
  if (!categoryDTO) {
    return {
      message: 'please Enter the right fields for category',
      Type: false
    };
  }

  const categoryData = new Category({
    title: categoryDTO.title,
    icon: categoryDTO.icon,
    isFeatured: categoryDTO.isFeatured,
    isVoided: categoryDTO.isVoided
  });

  categoryData
    .save()
    .then(() => {
      console.log('category saved', categoryData._id);
      return 'category saved successfully', categoryData._id;
    })
    .catch((err) => {
      console.log('error saving category', err);
      return 'error saving category';
    });
  return categoryData;
};

export const isCategoryVoid = async (id, isVoided) => {
  const deleteCategory = await Category.findOneAndUpdate({
    _id: id,
    isVoided
  });
  console.log(deleteCategory);
  if (deleteCategory == undefined) {
    return {
      message: 'Category not found ',
      type: false,
      response: deleteCategory
    };
  }
  return {
    deleteCategory: deleteCategory,
    type: true,
    message: 'Category deleted'
  };
};
export const categoryListService = async () => {
  const categoryList = await Category.find({ isFeatured: true });
  console.log(categoryList);
  if (!categoryList) {
    console.log('Something went wrong in category listing', categoryList);
    throw new Error('Unable to retrieve category list');
  }
  return {
    categoryList: categoryList,
    message: 'List of categories found ',
    Type: true
  };
};

export const categoryDetails = async (id) => {
  const category = await category.find({ id });
  if (!category) {
    console.log('Something went wrong in category', category);
    throw new Error('Unable to retrieve category');
  }
  return {
    catetory,
    message: 'List of categories found ',
    type: true
  };
};

export const updateCategoryService = async () => {
  const categoryDetails = await category.findAndUpdate({ id });
  if (!categoryDetails) throw new Error();
  else
    return {
      message: ' categorgyDetials found',
      categoryDetails: categoryDetails
    };
};
