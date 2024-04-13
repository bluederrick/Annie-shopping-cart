import Product from '../../Models/Products';
import customError from '../../utilitiy/customError';
import { v4 as uuid } from 'uuid';
const errorStack = new customError(400, 'Product not found');

import { StatusCode } from '../../utilitiy/status.js';
import { productSchema } from './products.validator.js';

export const getAllProductServices = async () => {
  const isProductExist = await Product.find({}).populate('category');
  console.log(isProductExist instanceof Product == true);
  if (isProductExist instanceof Product == false) {
    return {
      result: isProductExist,
      message: 'products found',
      type: true
    };
  }

  console.log(isProductExist, 'Products not found ');
  return errorStack;
};


export const productService =()=>{
  const isProduct = product.findById({}).populate('category')
};


export const createProductsService = async (data) => {
//  validate every category for product stream line 
  const productDTO = await productSchema.validate(data);
const categoryDTO = productDTO.category
   const isCategory = await Category.find({categoryDTO });
  if(isCategory){
    return {
      Type: false,
      message: 'category cannot be found '
    }
  }

  if (!productDTO || productDTO == null) {
    return {
      title: 'No products ',
      message: 'No products have been created'
    };
  }

  const newProducts = new Product({
    id: uuid(),
    productTitle: productDTO.productTitle,
    price: productDTO.price,
    description: productDTO.description,
    imageUrl: productDTO.imageUrl,
    review: productDTO.review,
    rating: productDTO.rating,
    category:productDTO.category
    // countInStock: productDTO.countInStock, 
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

export const updateProductService = () => {
  const updateProduct = product.findByIdAndUpdate()

  if !updateProduct){
     return throw new Error('Product not found');
  }
  return  updateProduct;
};

export const deleteProductService = async (id) => {
  const products = await Product.findOneAndDelete({ _id: id });
  console.log(products);
  if (!products) {
    return {
      message: 'Product deleted failed ',
      type: false
    };
  }
  return {
    message: 'Product deleted successfully',
    type: true
  };
};

/* TODO: Products
 * get product details
 * get product by category   /categories/:categoryId/products
 * search product
 */

/* TODO: Orders(userId, orderNumber) & OrderItems (orderId, productId, quantity, pricePerItem)
 * create order and order items
 * get orders ()
 * get order details => this will retieve products in this order and the
 * quantity and price
 */

/* TODO: Transactions
 * create transaction when  payment has been made for an order
 * update transaction if the payment gateway has verified the payment then
 * update transaction status
 * get transaction details
 * get list of transaction
 */

//Advance (Good to have but not necessarily)
/*Carts & Wishlists
 * Save products that a user has added to cart and also wishlist
 * create wishlist
 * create cart
 * remove item from cart
 * remove item from wishlist
 * get cart items
 * get wishlist items
 */
