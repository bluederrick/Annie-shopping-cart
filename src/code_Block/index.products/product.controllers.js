import restrictUsersAuthentication_ from '../../utilitiy/restrict';
import {
  createProductsService,
  deleteProductService,
  getAllProductServices
} from './products.service';

export const productController = async (req, res) => {
  const services = await getAllProductServices();
  console.log(services);
  return res.status(200).json({
    message: 'products found',
    services
  });
};

export const AddProductsController = async (req, res) => {
  const {
    productTitle,
    price,
    description,
    imageUrl,
    review,
    rating,
    category
  } = req.body;
  const addedProducts = await createProductsService({
    productTitle,
    price,
    description,
    imageUrl,
    review,
    rating,
    category
  });
  console.log(addedProducts);
  addedProducts
    ? res.status(200).json({
        title: 'Products added ',
        message: ' products was added successfully'
      })
    : res.status(400).json({
        title: 'No products ',
        message: 'No products were added successfully'
      });
  return addedProducts;
};

export const deleteProductController = async (req, res) => {
  const { id } = req.params;

  const productDeleted = await deleteProductService(id);
  console.log(productDeleted, 'derrick mark');
  if (productDeleted == null || !productDeleted) {
    return res.status(200).json({
      Title: 'product  successfully deleted',
      Messsage: 'product was able to be deleted from database'
    });
  }
  return res.status(400).json({
    Title: 'product deleted failed',
    Message: ' product was deleted from the database failed to be deleted',
    productDeleted
  });
};

// export const restrict = restrictUsersAuthentication_(req, res, next);
export const updatedProduct = async (req, res) => {
  const id = req.params.id;
  const updatedDetails = await updateProductService(id);
  if (!updatedDetails) {
    return res.status(404).send('product not Updated');
  }
  return res.status(200).json({
    updatedDetails,
    messgae: 'Product updated successfully'
  });
};
