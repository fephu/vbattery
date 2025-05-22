import express from "express";
import { addBanner, getAllBanners, removeBanner } from "../controllers/banner";
import { authorize, protectedRoute } from "../middlewares/auth";
import multer from "multer";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

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
