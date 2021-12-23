import express from "express";
import * as services from "../services/login.services";


const router = express.Router();


router.post("/save", services.save);
router.post("/auth", services.auth);
router.post("/verify", services.verifyUser);
export default router;