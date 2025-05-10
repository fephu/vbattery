import express from "express";
import { createEquipment, getAllEquipments } from "../controllers/equipment";

const router = express.Router();

router.get("/", getAllEquipments);
router.post("/create", createEquipment);

export const equipmentRouter = router;
