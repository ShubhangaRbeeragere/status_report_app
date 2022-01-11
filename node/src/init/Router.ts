import express from "express";
import achievementsRouter from "../router/Achievements.router";
import milestonesRouter from "../router/Milestones.router";


const BasicRouter = express.Router();

BasicRouter.use('/achievements',achievementsRouter)
BasicRouter.use('/milestones',milestonesRouter)



export default BasicRouter;