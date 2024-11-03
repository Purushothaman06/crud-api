import express from "express";
import getProductController from "../controllers/product/getProductController.js";
import getProductsController from "../controllers/product/getProductsController.js";
import createProduct from "../controllers/product/createProductController.js";
import updateProductController from "../controllers/product/updateProductController.js";
import deleteProductController from "../controllers/product/deleteProductController.js";

const productRouter = express.Router();

productRouter.get("/", getProductsController);
productRouter.get("/:id", getProductController);
productRouter.post("/", createProduct);
productRouter.put("/:id", updateProductController);
productRouter.delete("/:id", deleteProductController);

export default productRouter;