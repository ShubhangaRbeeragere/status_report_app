import { getManager } from "typeorm";
import { Achievements } from "../model/entity/Achievements";
import {Response, Request} from "express";

export const createADETAIL= async(req: Request, res: Response) => {

    console.log(req.body)

    let newData = new Achievements();
    newData.achievement_name = req.body.achievem;
    newData.content = req.body.content;
    newData.date = req.body.date;

    try{
        let manager = getManager();
        await manager.save(newData);
        console.log("data saved successfuly");
        res.status(200).send("Data Saved");
        console.log(newData)
    }
    catch(error: any){
        console.log("error: ", error.message);
        res.status(400).send(error.message);
    }
}

