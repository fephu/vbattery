import mongoose from "mongoose";

const { Schema } = mongoose;

const bannerSchema = new Schema({
  image_url: {
    type: String,
    required: [true, "Image url is required"],
  },
  link_url: {
    type: String,
    required: [true, "Link url is required"],
  },
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  isActive: {
    type: Boolean,
    required: [true, "isActive is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Banner = mongoose.model("Banner", bannerSchema);
