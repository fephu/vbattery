import express from "express";
import { login, register } from "../controllers/auth";

const router = express.Router();

router.post("/", register);
router.post("/login", login);

export const authRouter = router;
