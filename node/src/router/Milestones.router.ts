import express from "express";
import { createMILESTONE, updateMILESTONE, getMilestones,deleteMILESTONE } from '../service/Milestones.service';

const milestonesRouter = express.Router();

milestonesRouter.get('/getMilestones', getMilestones);
milestonesRouter.post('/createMILESTONE', createMILESTONE);
milestonesRouter.put('/updateMILESTONE', updateMILESTONE);
milestonesRouter.delete('/deleteM', deleteMILESTONE);

export default milestonesRouter;