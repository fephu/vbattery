import express from "express";
import { createProduct, getAllProducts } from "../controllers/product";

const router = express();

router.get("/", getAllProducts);
router.get("/create", createProduct);

export const productRouter = router;
