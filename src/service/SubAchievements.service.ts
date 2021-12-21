import {getManager} from "typeorm";
import {Response, Request} from "express";
import { SubAchievements } from '../model/entity/sub_Achieve';

///////--------GET ALL MILESTONES DETAIL---------/////////


export const getSUBS = async(req: Request, res: Response) =>
{
    let dataManager = getManager();
    let Data = await dataManager.find(SubAchievements); 
    console.log(Data);
    res.status(200).send(Data);
}
export const createSUBS= async(req: Request, res: Response) => {

    console.log(req.body)

    let newData = new SubAchievements();
    newData.sub_achievement_name = req.body.SUB_ACHIEVEMENT_NAME;
    newData.content = req.body.CONTENT;


    try{
        let manager = getManager();
        await manager.save(newData);
        console.log("data saved successfuly");
        res.status(200).send("POST: Data Saved");
        console.log(newData)
    }
    catch(error: any){
        console.log("error: ", error.message);
        res.status(400).send(error.message);
    }
}

