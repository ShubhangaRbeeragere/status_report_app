import express from "express";
import { createMILESTONE, updateMILESTONE, deleteMILESTONE, getMilestones } from '../service/Milestones.service';

const milestonesRouter = express.Router();

milestonesRouter.get('/getMilestones', getMilestones);
milestonesRouter.post('/createMILESTONE', createMILESTONE);
milestonesRouter.put('/updateMILESTONE', updateMILESTONE);
milestonesRouter.delete('/deleteMILESTONE', deleteMILESTONE);

export default milestonesRouter;