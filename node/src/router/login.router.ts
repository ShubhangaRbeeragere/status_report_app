import express from "express";
import * as services from "../services/login.services";


const router = express.Router();


router.post("/save", services.saveUser);
router.post("/auth", services.authenticate);
// router.post("/verify", services.verifyUser);
export default router;