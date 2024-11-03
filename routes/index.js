import express from "express";

import productRouter from "./productRouter.js";

const indexRouter = express.Router();

indexRouter.use(`/product`, productRouter);

export default indexRouter;