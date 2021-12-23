import express from "express";
import * as services from "../services/login.services";


const router = express.Router();


router.post("/auth", services.auth);

export default router;