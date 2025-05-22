import express from "express";
import { addBanner, getAllBanners, removeBanner } from "../controllers/banner";
import { authorize, protectedRoute } from "../middlewares/auth";
import { v2 as cloudinary } from "cloudinary";
import multer from "multer";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

cloudinary.config({
  cloud_name: "dejacloud",
  api_key: "743423826566419",
  api_secret: "oxjm4g9TvuSwU5cjP1WCQFAvQEY",
});

router.get("/", getAllBanners);
router.post(
  "/create",
  protectedRoute,
  authorize("admin"),
  upload.single("image_url"),
  addBanner
);
router.delete("/delete/:id", protectedRoute, authorize("admin"), removeBanner);

export const bannerRouter = router;
