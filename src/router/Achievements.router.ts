import express from "express";
import { createDETAIL, getDETAIL, getDETAILByDATE } from '../service/Achievement.service';

const achievementsRouter = express.Router();

achievementsRouter.get('/getDETAIL', getDETAIL);
achievementsRouter.get('/getDETAILByDATE', getDETAILByDATE);
achievementsRouter.post('/createDETAIL', createDETAIL);

export default achievementsRouter;