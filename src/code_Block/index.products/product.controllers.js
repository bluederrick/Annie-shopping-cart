import {
  createProductsService,
  deleteProductService,
  getAllProductServices
} from './products.service';

export const productController = async (req, res) => {
  const services = await getAllProductServices();
  console.log(services);
  return res.json({ services: services });
};

export const AddProductsController = async (req, res) => {
  const { productTitle, description, price, imageUrl, review, rating } =
    req.body;
  const addedProducts = await createProductsService({
    productTitle,
    description,
    price,
    imageUrl,
    review,
    rating
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
  const productDeleted = deleteProductService(id);

  if (!productDeleted) {
    return res.status().json({
      Title: 'product delete failed',
      Messsage: 'product was unable to be deleted from database'
    });
  }
  return res.status(200).json({
    Title: 'product deleted successfully',
    Message: ' product was deleted from the database successfully',
    response: productDeleted
  });
};
