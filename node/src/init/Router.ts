import express from "express";
import achievementsRouter from "../router/Achievements.router";
import milestonesRouter from "../router/Milestones.router";
import subachievementsRouter from "../router/SubAchievements.router";


const BasicRouter = express.Router();

BasicRouter.use('/achievements',achievementsRouter)
BasicRouter.use('/milestones',milestonesRouter)
BasicRouter.use('/subachievements',subachievementsRouter)




export default BasicRouter;