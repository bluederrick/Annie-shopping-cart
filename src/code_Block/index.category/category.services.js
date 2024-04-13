import Category from '../../Models/Category';

export const categoryService = (data) => {};

export const categoryListService = async () => {
  const categoryList = await category.find({ isActive: true });
  if(!categoryList) {
    console.log('Something went wrong in category listing', categoryList)
    throw new Error('Unable to retrieve category list')
  }
    return {
      catetoryList,
      message: 'List of categories found '
      type: true
    };
};


export const categoryDetails = async (id) => {
  const category = await category.find({ id });
  if(!category) {
    console.log('Something went wrong in category', category)
    throw new Error('Unable to retrieve category')
  }
  return {
      catetory,
      message: 'List of categories found '
      type: true
    };
}


export const updateCategoryService = ()=> {
  const categoryDetails  =  await category.findAndUpdate({id});
  if(!categoryDetails) 
  throw new Error

  else return {
     message:' categorgyDetials found',
     categoryDetails: categoryDetails
  }
};