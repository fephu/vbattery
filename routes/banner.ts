import express from "express";
import { addBanner, getAllBanners, removeBanner } from "../controllers/banner";

const router = express.Router();

router.get("/", getAllBanners);
router.post("/create", addBanner);
router.delete("/delete", removeBanner);

export const bannerRouter = router;
