import { productModel } from "../../models/productModel.js";

const updateProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productModel.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(400).json({ message: "Product not found" });
    }

    const updatedProduct = await productModel.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default updateProductController;
