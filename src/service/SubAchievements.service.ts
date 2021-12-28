import {getManager} from "typeorm";
import {Response, Request} from "express";
import { SubAchievements } from '../model/entity/SubAchievements';

///////--------GET ALL subachievement DETAIL---------/////////


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

export const updateSUBS = async(req: Request, res: Response) => {
    let manager = getManager();
    try{
        let updatedsubachievement = await manager.findOne(SubAchievements,
            {
                sub_achievement_name : req.body.sub_achievement_name,
            });
        if(updatedsubachievement === undefined){
            throw new Error("Data Doesn't Exist");
        }

        updatedsubachievement.sub_achievement_name = req.body.sub_achievement_name;
        updatedsubachievement.content = req.body.content;

        await manager.save(updatedsubachievement);


        console.log("Data Updated successfully");
        res.status(200).send("Data Updated");
    }
    catch(error: any){
        res.status(400).send(error.message);
        console.log(error.message);
    }
}

export const deleteSUBS = async(req: Request, res: Response) => {
    let manager = getManager();
    try{
        let deletesubachievement = await manager.findOne(SubAchievements,
            {

                sub_achievement_name : req.body.sub_achievement_name,

            });
        if(deletesubachievement === undefined){
            throw new Error("Data Doesn't Exist");
        }
        await manager.remove(deletesubachievement);
        console.log("Data Deleted");
        res.status(200).send("Data Deleted");
    } 
    catch(error: any){
        res.status(400).send(error.message);
        console.log(error.message);
    }
}
