import { asyncHandler } from "../middlewares/async";
import { Product } from "../models/Product";
import { ErrorResponse } from "../utils/errorResponse";
import { slugName } from "../utils/slug";

export const getAllProducts = asyncHandler(async (req, res, next) => {
  const products = await Product.find();
  res.status(200).json({ success: true, data: products });
});

export const createProduct = asyncHandler(async (req, res, next) => {
  const {
    ten_san_pham,
    ma_san_pham,
    diep_ap,
    dung_luong,
    kich_thuoc,
    mau_sac,
    trong_luong,
    xuat_xu,
    gia_san_pham,
    hinh_anh,
  } = req.body;

  const sluggedName = slugName(ten_san_pham);

  const product = await Product.create({
    ten_san_pham,
    ma_san_pham,
    diep_ap,
    dung_luong,
    gia_san_pham,
    hinh_anh,
    kich_thuoc,
    mau_sac,
    slug: sluggedName,
    trong_luong,
    xuat_xu,
  });

  res.status(200).json({ success: true, data: product });
});

export const getProductBySlug = asyncHandler(async (req, res, next) => {
  const slug = req.params.slug;

  const product = await Product.find({
    slug,
  });

  if (!product) {
    return next(new ErrorResponse(`No product with ${req.params.slug}`, 404));
  }

  res.status(200).json({
    success: true,
    data: product,
  });
});
