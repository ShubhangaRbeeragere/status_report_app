import express from "express";
import { createDETAIL, getDETAIL, getDETAILByDATE } from '../service/Achievement.service';

const milestonesRouter = express.Router();

milestonesRouter.get('/getDETAIL', getDETAIL);
milestonesRouter.get('/getDETAILByDATE', getDETAILByDATE);
milestonesRouter.post('/createDETAIL', createDETAIL);

export default milestonesRouter;