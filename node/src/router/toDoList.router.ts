import express from "express";
import * as services from "../services/toDoList.services";
import * as middleware from "../middleware/auth";

const router = express.Router();


router.get("/getAll", middleware.verifyToken, services.getAll);
router.get("/getOnly", middleware.verifyToken, services.getOnly);
router.post("/addData", middleware.verifyToken, services.addData);
router.put("/updateData", middleware.verifyToken, services.updateData);
router.delete("/removeData", middleware.verifyToken, services.removeData);


export default router;