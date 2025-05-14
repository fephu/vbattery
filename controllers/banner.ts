import { asyncHandler } from "../middlewares/async";
import { Banner } from "../models/Banner";

export const addBanner = asyncHandler(async (req, res, next) => {
  const { image_url, link_url, title, position } = req.body;

  const banner = await Banner.create({
    image_url,
    link_url,
    title,
    position,
  });

  res.status(200).json({ banner });
});

export const getAllBanners = asyncHandler(async (req, res, next) => {
  const banners = await Banner.find({}).sort("position").limit(4);

  res.status(200).json({ banners });
});

export const removeBanner = asyncHandler(async (req, res, next) => {
  const { banner_id } = req.body;

  const banner = await Banner.deleteOne(banner_id);

  res.status(200).json({ banner });
});
