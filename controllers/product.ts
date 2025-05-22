import { asyncHandler } from "../middlewares/async";
import { Equipment } from "../models/Equipment";
import { Product } from "../models/Product";
import { ErrorResponse } from "../utils/errorResponse";
import { slugName } from "../utils/slug";
import { v2 as cloudinary, type UploadApiResponse } from "cloudinary";
import streamifier from "streamifier";

export const getAllProducts = asyncHandler(async (req, res, next) => {
  const page_size = parseInt(req.query.page_size as string) || 6;
  let page = parseInt(req.query.page_id as string) || 1;
  const equip = req.query.equip;

  let query = Product.find({})
    .skip(page_size * page - page_size)
    .limit(page_size);

  const total = await Product.find({}).countDocuments();

  if (equip) {
    const equipment = await Equipment.findOne({ slug: equip });

    if (!equipment) {
      return next(new ErrorResponse(`No equipment`, 404));
    }

    query = query
      .where("thiet_bi_su_dung")
      .equals(equipment._id)
      .populate("thiet_bi_su_dung");
  }

  const products = await query.exec();

  res.status(200).json({
    success: true,
    data: {
      products,
      page_id: page,
      total_product: total,
      total_pages: Math.ceil(total / page_size),
    },
  });
});

export const createProduct = asyncHandler(async (req, res, next) => {
  const {
    ten_san_pham,
    ma_san_pham,
    dien_ap,
    dung_luong,
    kich_thuoc,
    mau_sac,
    trong_luong,
    xuat_xu,
    gia_san_pham,
    thiet_bi_su_dung,
  } = req.body;

  const file = req.file;

  if (!file) {
    return res.status(400).json({ error: "Image is required" });
  }

  const uploadStream = cloudinary.uploader.upload_stream(
    { folder: "products" },
    async (error, result) => {
      if (error || !result) {
        return res.status(500).json({ error });
      }
      const images = [];

      images.push(result.url);

      const sluggedName = slugName(ten_san_pham);

      const product = await Product.create({
        ten_san_pham,
        ma_san_pham,
        dien_ap,
        dung_luong,
        gia_san_pham,
        hinh_anh: images,
        kich_thuoc,
        mau_sac,
        slug: sluggedName,
        trong_luong,
        xuat_xu,
        thiet_bi_su_dung,
      });

      return res.status(200).json({ product });
    }
  );

  streamifier.createReadStream(file.buffer).pipe(uploadStream);
});

export const getProductBySlug = asyncHandler(async (req, res, next) => {
  const slug = req.params.slug;

  const product = await Product.findOne({
    slug,
  });

  if (!product) {
    return next(new ErrorResponse(`No product with ${req.params.slug}`, 404));
  }

  res.status(200).json({
    product,
  });
});

export const delelteProduct = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const product = await Product.findByIdAndDelete(id);

  res.status(200).json({ product });
});
