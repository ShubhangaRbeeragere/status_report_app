import express from "express";
import { getDETAIL, getDETAILByDATE, updateDETAIL, deleteDETAIL, getAllDETAIL, UpdateDETAILS, getALLDETAILByDATE, deleteA } from '../service/Achievements.service';
import { createDETAIL } from '../service/Achievements.service';
import { deleteDetail } from '../service/Achievements.service';
import { createADETAIL } from "../service/test";


const achievementsRouter = express.Router();

achievementsRouter.get('/getDETAIL', getDETAIL);
achievementsRouter.get('/getALLDETAIL', getAllDETAIL);
achievementsRouter.get('/getDETAILByDATE', getDETAILByDATE);
achievementsRouter.get('/getALLDETAILByDATE', getALLDETAILByDATE);
achievementsRouter.post('/createDETAIL', createDETAIL);
achievementsRouter.put('/updateDETAIL', updateDETAIL);
achievementsRouter.put('/updateDETAILS', UpdateDETAILS);
achievementsRouter.delete('/deleteDetail', deleteDetail);
achievementsRouter.delete('/deleteA', deleteA);
achievementsRouter.post('/createADETAIL', createADETAIL);




export default achievementsRouter;