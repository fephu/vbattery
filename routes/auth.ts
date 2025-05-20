import express from "express";
import {
  fetchCurrentUser,
  login,
  register,
  renewAccessToken,
} from "../controllers/auth";
import { protectedRoute } from "../middlewares/auth";

const router = express.Router();

router.post("/", register);
router.post("/login", login);
router.get("/fetch", protectedRoute, fetchCurrentUser);
router.get("/tokens/renew_access", renewAccessToken);

export const authRouter = router;
