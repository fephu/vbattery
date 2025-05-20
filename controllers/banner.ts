import { asyncHandler } from "../middlewares/async";
import { Banner } from "../models/Banner";

export const addBanner = asyncHandler(async (req, res, next) => {
  const { image_url, link_url, title, isActive } = req.body;

  const banner = await Banner.create({
    image_url,
    link_url,
    title,
    isActive,
  });

  res.status(200).json({ banner });
});

export const getAllBanners = asyncHandler(async (req, res, next) => {
  const banners = await Banner.find({}).limit(4);

  res.status(200).json({ banners });
});

export const removeBanner = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const banner = await Banner.findByIdAndDelete(id);

  res.status(200).json({ banner });
});
