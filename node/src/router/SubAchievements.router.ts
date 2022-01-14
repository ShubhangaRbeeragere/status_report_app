import express from "express";
import { createDETAIL, getDETAIL, getDETAILByDATE } from '../service/Achievements.service';
import { createSUBS, getSUBS, updateSUBS, deleteSUBS } from '../service/SubAchievements.service';

const subachievementsRouter = express.Router();

subachievementsRouter.get('/getSUBS', getSUBS);
subachievementsRouter.post('/createSUBS', createSUBS);
subachievementsRouter.put('/updateSUBS', updateSUBS);
subachievementsRouter.delete('/deleteSUBS', deleteSUBS);

export default subachievementsRouter;