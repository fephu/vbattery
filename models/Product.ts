import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
  ten_san_pham: {
    type: String,
    required: [true, "Tên sản phẩm là bắt buộc"],
  },
  slug: {
    type: String,
    required: [true, "Slug là bắt buộc"],
  },
  ma_san_pham: {
    type: String,
    required: [true, "Mã sản phẩm là bắt buộc"],
  },
  diep_ap: {
    type: String,
    required: [true, "Điệp áp là bắt buộc"],
  },
  dung_luong: {
    type: String,
    required: [true, "Dung lượng là bắt buộc"],
  },
  kich_thuoc: {
    type: String,
    required: [true, "Kích thước là bắt buộc"],
  },
  mau_sac: {
    type: String,
    required: [true, "Màu sắc là bắt buộc"],
  },
  trong_luong: {
    type: String,
    required: [true, "Trọng lượng là bắt buộc"],
  },
  xuat_xu: {
    type: String,
    required: [true, "Xuất xứ là bắt buộc"],
  },
  gia_san_pham: {
    type: Number,
    required: [true, "Giá sản phầm là bắt buộc"],
  },
  hinh_anh: [{ type: String }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  thiet_bi_su_dung: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Equipment",
    },
  ],
});

export const Product = mongoose.model("Product", productSchema);
