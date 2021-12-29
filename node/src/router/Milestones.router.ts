import express from "express";
import { createDETAIL, getDETAIL, getDETAILByDATE } from '../service/Achievements.service';
import { createMILESTONE, updateMILESTONE, deleteMILESTONE } from '../service/Milestones.service';

const milestonesRouter = express.Router();

milestonesRouter.get('/getDETAIL', getDETAIL);
milestonesRouter.get('/getDETAILByDATE', getDETAILByDATE);
milestonesRouter.post('/createMILESTONE', createMILESTONE);
milestonesRouter.put('/updateMILESTONE', updateMILESTONE);
milestonesRouter.delete('/deleteMILESTONE', deleteMILESTONE);

export default milestonesRouter;