import express from "express";
import { protectRoute } from "../middlewares/protectRoute.js";
import {
  deleteNotfications,
  deleteOneNotfications,
  getNotfications,
} from "../controllers/notification.controller.js";

const router = express.Router();

router.get("/", protectRoute, getNotfications);
router.delete("/", protectRoute, deleteNotfications);
router.delete("/:id", protectRoute, deleteOneNotfications);

export default router;
