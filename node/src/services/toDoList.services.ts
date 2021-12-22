import { getManager } from "typeorm";
import ToDoContent from "../model/entity/toDoContent"
import ToDoList from "../model/entity/toDoList"
import {Request, Response} from "express";
import * as toDoLayout from "../model/interface/toDoList.interface"
//get all the to do list rows
export const getAll = function(req: Request, res: Response){
    
    res.status(200).send("ok")
}
//get one row from to do list rows
export const getOnly = function(req: Request, res: Response){

}
//add one row to 'to do list'
export const addData = async function(req: Request, res: Response){
    let receivedData: toDoLayout.toDoList = req.body;
    let manager = getManager();

    //save the list and content in the tables
    let toDoList = new ToDoList();
    toDoList.title = receivedData.title;
    toDoList.date = receivedData.date;
    
    try{
        let findList = await manager.findOne(ToDoList, {title: receivedData.title});
            if(findList !== undefined){
                throw new Error("data already exists");
            }
            //save the todolist table
            await manager.save(toDoList);
            //save todocontent table with foreign key
            receivedData.content.forEach(async (data) => {
                let toDoContent = new ToDoContent();
                toDoContent.content = data.text; 
                toDoContent.list_id_fk = toDoList;
                await manager.save(toDoContent);
            })
            console.log("POST: data saved");
            res.status(200).send("POST: data saved");
    }
    catch(error: any){
        console.log(error.message);
        res.status(400).send("POST: problem occured");
    };
}
//remove to do list rows
export const removeData = function(req: Request, res: Response){

}

//update to do list
export const updateData = function(req: Request, res: Response){

}
