import express from "express";
import { getDETAIL, getDETAILByDATE, updateDETAIL, deleteDETAIL, getAllDETAIL, UpdateDETAILS, getALLDETAILByDATE } from '../service/Achievements.service';
import { createDETAIL } from '../service/Achievements.service';
import { deleteDetail } from '../service/Achievements.service';


const achievementsRouter = express.Router();

achievementsRouter.get('/getDETAIL', getDETAIL);
achievementsRouter.get('/getALLDETAIL', getAllDETAIL);
achievementsRouter.get('/getDETAILByDATE', getDETAILByDATE);
achievementsRouter.get('/getALLDETAILByDATE', getALLDETAILByDATE);
achievementsRouter.post('/createDETAIL', createDETAIL);
achievementsRouter.put('/updateDETAIL', updateDETAIL);
achievementsRouter.put('/updateDETAILS', UpdateDETAILS);
achievementsRouter.delete('/deleteDetail', deleteDetail);



export default achievementsRouter;