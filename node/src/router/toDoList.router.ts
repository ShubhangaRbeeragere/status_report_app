import express from "express";
import * as services from "../services/toDoList.services";


const router = express.Router();


router.get("/getAll", services.getAll);
router.get("/get", services.getOnly);
router.post("/addData", services.addData);
router.put("/updateData", services.updateData);
router.delete("/removeData", services.removeData);


export default router;