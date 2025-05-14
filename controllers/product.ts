import { asyncHandler } from "../middlewares/async";
import { Product } from "../models/Product";
import { ErrorResponse } from "../utils/errorResponse";
import { slugName } from "../utils/slug";

export const getAllProducts = asyncHandler(async (req, res, next) => {
  const page_size = parseInt(req.query.page_size as string) || 6;
  let page = parseInt(req.query.page_id as string) || 1;

  const total = await Product.find({}).countDocuments();

  const products = await Product.find({})
    .skip(page_size * page - page_size)
    .limit(page_size);

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
    diep_ap,
    dung_luong,
    kich_thuoc,
    mau_sac,
    trong_luong,
    xuat_xu,
    gia_san_pham,
    hinh_anh,
    thiet_bi_su_dung,
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
    thiet_bi_su_dung,
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
