import express from "express";
import { createDETAIL, getDETAIL, getDETAILByDATE } from '../service/Achievement.service';
import { createSUBS, getSUBS } from '../service/SubAchievements.service';

const subAchievementsRouter = express.Router();

subAchievementsRouter.get('/getSUBS', getSUBS);
subAchievementsRouter.post('/createSUBS', createSUBS);

export default subAchievementsRouter;