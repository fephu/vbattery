import { asyncHandler } from "../middlewares/async";
import { Product } from "../models/Product";

export const getAllProducts = asyncHandler(async (req, res, next) => {
  const products = await Product.find();
  res.status(200).json({ success: true, data: products });
});

export const createProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(200).json({ success: true, data: product });
});
