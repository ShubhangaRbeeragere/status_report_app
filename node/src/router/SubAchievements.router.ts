import express from "express";
import { createDETAIL, getDETAIL, getDETAILByDATE } from '../service/Achievements.service';
import { createSUBS, getSUBS, updateSUBS, deleteSUBS } from '../service/SubAchievements.service';

const subAchievementsRouter = express.Router();

subAchievementsRouter.get('/getSUBS', getSUBS);
subAchievementsRouter.post('/createSUBS', createSUBS);
subAchievementsRouter.put('/updateSUBS', updateSUBS);
subAchievementsRouter.delete('/deleteSUBS', deleteSUBS);

export default subAchievementsRouter;