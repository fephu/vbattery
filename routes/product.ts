import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductBySlug,
} from "../controllers/product";

const router = express();

router.get("/", getAllProducts);
router.get("/:slug", getProductBySlug);
router.post("/create", createProduct);

export const productRouter = router;
