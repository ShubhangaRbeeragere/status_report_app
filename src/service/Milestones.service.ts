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
    newData.title = req.body.TITLE;
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

