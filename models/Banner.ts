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
  position: {
    type: Number,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Banner = mongoose.model("Banner", bannerSchema);
