import express from "express";
import {
  createEquipment,
  getAllEquipments,
  getEquipment,
  removeEquipment,
} from "../controllers/equipment";

const router = express.Router();

router.get("/", getAllEquipments);
router.get("/:slug", getEquipment);
router.delete("/delete/:id", removeEquipment);
router.post("/create", createEquipment);

export const equipmentRouter = router;
