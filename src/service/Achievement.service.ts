import {getManager} from "typeorm";
import {Response, Request} from "express";
import { Achievements } from '../model/entity/Achievements';
import { Milestones } from '../model/entity/Milestone';
import { SubAchievements } from '../model/entity/sub_Achieve';

///////--------GET ALL ACHIEVEMENTS---------/////////


export const getDETAIL = async(req: Request, res: Response) =>
{
    let dataManager = getManager();
    let Data = await dataManager.find(Achievements); 
    console.log(Data);
    res.status(200).send(Data);
}
export const createDETAIL= async(req: Request, res: Response) => {

    console.log(req.body)

    let newData = new Achievements();
    newData.achievement_name = req.body.ACHIEVEMENT;
    newData.content = req.body.CONTENT;
    newData.date = req.body.DATE;

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



export const getDETAILByDATE = async(req: Request, res: Response) => {
    let receivedData: any = req.query;
    let manager = getManager();
    try{
        const achievement = await manager.findOne(Achievements, {date: receivedData.DATE});
        if(achievement === undefined){
            throw new Error("GET: user doesn't exist");
        }
        let finalData = {...achievement};
        res.status(200).send(finalData);
    }
    catch(error: any){
        console.log(error.message);
        res.status(400).send(error.message);
    }
}



