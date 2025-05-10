import mongoose from "mongoose";

const { Schema } = mongoose;

const equipmentSchema = new Schema({
  ten_thiet_bi: {
    type: String,
    required: [true, "Tên thiết bị là bắt buộc"],
  },
  slug: {
    type: String,
    required: [true, "Slug là bắt buộc"],
  },
});

export const Equipment = mongoose.model("Equipment", equipmentSchema);
