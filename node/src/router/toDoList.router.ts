import express from "express";
import * as services from "../services/toDoList.services";


const router = express.Router();


router.get("/getAll", services.getAll);
router.get("/get", services.getOnly);
router.post("/getAll", services.addData);
router.put("/getAll", services.updateData);
router.delete("/getAll", services.removeData);


export default router;