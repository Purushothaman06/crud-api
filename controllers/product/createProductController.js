import { productModel } from "../../models/productModel.js";
import {
  createProductValidation,
  validateProduct,
} from "../validations/productValidation.js";
import { sendCreated, sendServerError } from "../utils/responseHandler.js";

const createProductController = async (req, res) => {
  try {
    const product = await productModel.create(req.body);
    return sendCreated(res, product);
  } catch (error) {
    return sendServerError(res, error.message);
  }
};

// Apply validation middleware before the controller
export const createProduct = [
  createProductValidation,
  validateProduct,
  createProductController,
];

export default createProduct;
