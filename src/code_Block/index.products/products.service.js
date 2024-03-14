import Product from "../../Models/Products"
import customError from "../../utilitiy/customError";

import { StatusCode } from "../../utilitiy/status.js"

export const getAllProductServices = () => {
    // modelfinder.getAllProductServices
    const isProductExist = Product.find()

    if (isProductExist instanceof Product == true) {
        return isProductExist;
    }
    else {
        return customError("Product not found", StatusCode.NOT_FOUND,)
    }

}