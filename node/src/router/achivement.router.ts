import express from "express";
import * as services from "../services/achievement.services";
import * as middleware from "../middleware/auth";

const router = express.Router();

router.get("/getAll", middleware.verifyToken, services.getAll);
router.post("/addData", middleware.verifyToken, services.addData);

export default router;
