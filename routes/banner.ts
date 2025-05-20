import express from "express";
import { addBanner, getAllBanners, removeBanner } from "../controllers/banner";
import { authorize, protectedRoute } from "../middlewares/auth";

const router = express.Router();

router.get("/", getAllBanners);
router.post("/create", protectedRoute, authorize("admin"), addBanner);
router.delete("/delete/:id", protectedRoute, authorize("admin"), removeBanner);

export const bannerRouter = router;
