import { getManager } from "typeorm";
import ToDoContent from "../model/entity/toDoContent"
import ToDoList from "../model/entity/toDoList"
import {Request, Response} from "express";
import * as toDoLayout from "../model/interface/toDoList.interface"
//get all the to do list rows
export const getAll = async function(req: Request, res: Response){
    let manager = getManager();
    try{
        let tableData = await manager.find(ToDoList, {
            relations: ["contentKey"]
        }); 
        console.log(tableData);
        res.status(200).send(tableData);
    }
    catch(error: any){
        console.log(error.message);
        res.status(400).send("GET: error occured");
    }
}
//get one row from to do list rows
export const getOnly = function(req: Request, res: Response){

}
//add one row to 'to do list'
export const addData = async function(req: Request, res: Response){
    let receivedData: toDoLayout.toDoList = req.body;
    let manager = getManager();

    //add the received data to the instance of class ToDoList
    let toDoList = new ToDoList();
    toDoList.title = receivedData.title;
    toDoList.date = receivedData.date;
    
    try{
        //check if the project already exists
        let findList = await manager.findOne(ToDoList, {title: receivedData.title});
            //if exists 
            if(findList !== undefined){
                throw new Error("data already exists");
            }
            //if not save the todolist table
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
