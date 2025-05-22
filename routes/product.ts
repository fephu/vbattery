import express from "express";
import {
  createProduct,
  delelteProduct,
  getAllProducts,
  getProductBySlug,
} from "../controllers/product";
import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import { authorize, protectedRoute } from "../middlewares/auth";

const router = express();
const upload = multer({ storage: multer.memoryStorage() });

cloudinary.config({
  cloud_name: "dejacloud",
  api_key: "743423826566419",
  api_secret: "oxjm4g9TvuSwU5cjP1WCQFAvQEY",
});

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
