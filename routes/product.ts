import express from "express";
import {
  createProduct,
  delelteProduct,
  getAllProducts,
  getProductBySlug,
} from "../controllers/product";
import multer from "multer";
import { authorize, protectedRoute } from "../middlewares/auth";

const router = express();
const upload = multer({ storage: multer.memoryStorage() });

router.get("/", getAllProducts);
router.get("/:slug", getProductBySlug);
router.post(
  "/create",
  protectedRoute,
  authorize("admin"),
  upload.single("hinh_anh"),
  createProduct
);
router.delete("/:id", delelteProduct);

export const productRouter = router;
