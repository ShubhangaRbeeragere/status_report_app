import express from "express";
import { createMILESTONE, updateMILESTONE, deleteMILESTONE } from '../service/Milestones.service';

const milestonesRouter = express.Router();

milestonesRouter.post('/createMILESTONE', createMILESTONE);
milestonesRouter.put('/updateMILESTONE', updateMILESTONE);
milestonesRouter.delete('/deleteMILESTONE', deleteMILESTONE);

export default milestonesRouter;