import { asyncHandler } from "../middlewares/async";
import { Equipment } from "../models/Equipment";
import { slugName } from "../utils/slug";

export const getAllEquipments = asyncHandler(async (req, res, next) => {
  const equipments = await Equipment.find();

  res.status(200).json({ equipments });
});

export const createEquipment = asyncHandler(async (req, res, next) => {
  const { ten_thiet_bi } = req.body;

  const slug = slugName(ten_thiet_bi);

  const equipment = await Equipment.create({
    ten_thiet_bi,
    slug,
  });

  res.status(200).json({ equipment });
});

export const getEquipment = asyncHandler(async (req, res, next) => {
  const slug = req.params.slug;

  const equipment = await Equipment.find({ slug });

  res.status(200).json({ equipment });
});

export const removeEquipment = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const equipment = await Equipment.findByIdAndDelete(id);

  res.status(200).json({ equipment });
});
