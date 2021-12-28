import {getManager} from "typeorm";
import {Response, Request} from "express";
import { Milestones } from '../model/entity/Milestone';

///////--------GET ALL MILESTONES DETAIL---------/////////


export const getMILESTONES = async(req: Request, res: Response) =>
{
    let dataManager = getManager();
    let Data = await dataManager.find(Milestones); 
    console.log(Data);
    res.status(200).send(Data);
}
export const createMILESTONES= async(req: Request, res: Response) => {

    console.log(req.body)

    let newData = new Milestones();
    newData.title = req.body.title;
    newData.content = req.body.content;


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

export const updateMILESTONE = async(req: Request, res: Response) => {
    let manager = getManager();
    try{
        let updatedmilestone = await manager.findOne(Milestones,
            {
                title : req.body.title,
            });
        if(updatedmilestone === undefined){
            throw new Error("Data Doesn't Exist");
        }

        updatedmilestone.title = req.body.title;
        updatedmilestone.content = req.body.content;

        await manager.save(updatedmilestone);


        console.log("Data Updated successfully");
        res.status(200).send("Data Updated");
    }
    catch(error: any){
        res.status(400).send(error.message);
        console.log(error.message);
    }
}

export const deleteDETAIL = async(req: Request, res: Response) => {
    let manager = getManager();
    try{
        let deletemilestone = await manager.findOne(Milestones,
            {

                title : req.body.title,

            });
        if(deletemilestone === undefined){
            throw new Error("Data Doesn't Exist");
        }
        await manager.remove(deletemilestone);
        console.log("Data Deleted");
        res.status(200).send("Data Deleted");
    } 
    catch(error: any){
        res.status(400).send(error.message);
        console.log(error.message);
    }
}
