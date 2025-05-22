import { asyncHandler } from "../middlewares/async";
import { Banner } from "../models/Banner";
import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";

export const addBanner = asyncHandler(async (req, res, next) => {
  const { link_url, title, isActive } = req.body;
  const file = req.file;

  if (!file) {
    return res.status(400).json({ error: "Image is required" });
  }

  const uploadStream = cloudinary.uploader.upload_stream(
    { folder: "banners" },
    async (error, result) => {
      if (error || !result) {
        return res.status(500).json({ error });
      }
      const banner = await Banner.create({
        image_url: result.url,
        isActive,
        link_url,
        title,
      });

      return res.status(200).json({ banner });
    }
  );

  streamifier.createReadStream(file.buffer).pipe(uploadStream);
});

export const getAllBanners = asyncHandler(async (req, res, next) => {
  const banners = await Banner.find({});

  res.status(200).json({ banners });
});

export const removeBanner = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const banner = await Banner.findByIdAndDelete(id);

  res.status(200).json({ banner });
});
