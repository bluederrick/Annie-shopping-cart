import Product from '../../Models/Products';
import customError from '../../utilitiy/customError';
import { v4 as uuid } from 'uuid';
const errorStack = new customError(400, 'Product not found');

import { StatusCode } from '../../utilitiy/status.js';
import { productSchema } from './products.validator.js';

export const getAllProductServices = async () => {
  const isProductExist = await Product.find({});

  console.log(isProductExist instanceof Product == true);
  if (isProductExist instanceof Product == true) {
    return console.log({ message: 'Product already exists' });
  }
  return errorStack;
};

export const createProductsService = async (data) => {
  const productDTO = await productSchema.validate(data);

  if (!productDTO) {
    return {
      title: 'No products ',
      message: 'No products have been created'
    };
  }

  const newProducts = new Product({
    id: uuid(),
    productTitle: productDTO.productTitle,
    description: productDTO.description,
    price: productDTO.price,
    imageUrl: productDTO.imageUrl,
    review: productDTO.review,
    rating: productDTO.rating,
    // countInStock: productDTO.countInStock,
    // category: productDTO.category,
    createdOn: Date.now()
  });

  newProducts
    .save()
    .then((result) => {
      console.log(result);
      return {
        result: result,
        message: 'new products saved successfully'
      };
    })
    .catch((error) => {
      console.log(error);
      return {
        Error: error.message,
        message: 'products saved failed'
      };
    });
  return newProducts;
};
export const updateProductService = () => {};

export const deleteProductService = async () => {
  const products = await Product.findOneAndDelete({ _id: id });
  if (_products.length > 0) {
    return {
      message: 'Product deleted failed',
      type: false,
      data: _products
    };
  }

  return {
    message: 'Product deleted successfully',
    type: true,
    data: ` products deleted {_products}`
  };
};
