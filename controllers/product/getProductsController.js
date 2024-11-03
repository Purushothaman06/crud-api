import { productModel } from "../../models/productModel.js";

const getProductsController = async (req, res) => {
  try {
    const products = await productModel.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default getProductsController;
