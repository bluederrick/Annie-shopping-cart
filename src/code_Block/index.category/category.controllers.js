export const addCategoryControllers = async (req, res) => {
  const addedCategory = await categoryService();

  if (!addedCategory) {
    return res.status(403).json({
      message: 'Category not added',
      Type: false,
      addedCategory
    });
    return res.status(201).json({
      message: 'Category added successfully',
      Type: true,
      addedCategory
    });
  }
};

export const deleteCategoryControllers = () => {};

export const categoryListControllers = (req,res) => {
  const categoryList = await categoryListService();

  if(!categoryList)
  return res.status(404).send('No category list found');

  return res.status(200).json({
    message: 'category List was found successfully ',
    categoryList
  })
};

export const categoryController = (req,res) => {
const {id} = req.params
const details  = await categoryDetails(id);
if(details && details === undefined){
   return res.status(404).send({message:'No category details found'});
   
}
return res.status(200).send(
  {message: 'Category details found',
   details
});

};

export const updateCategoryControllers =(req,res)=>{
  const {id} = req.params;
  const updateCategory = await categoryService(id);
  if(updateCategory){
     return res.status(400).send('Update category failed')
  }
 return res..status(200).json({
   message: 'Category updated successfully',
    updatedCategory : updatedCategory
 })
};