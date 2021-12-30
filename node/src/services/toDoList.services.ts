import { getManager } from "typeorm";
import ToDoContent from "../model/entity/toDoContent"
import ToDoList from "../model/entity/toDoList"
import {Request, Response} from "express";
import * as toDoLayout from "../model/interface/toDoList.interface"

//get all the to do list table/////////////////////////////////////////////////
export const getAll = async function(req: Request, res: Response){
    let manager = getManager();
    try{
        let tableData = await manager.find(ToDoList, {
            relations: ["contentKey"]
        }); 
        console.log("GET: successfull");
        res.status(200).send(tableData);
    }
    catch(error: any){
        console.log(error.message);
        res.status(400).send(error.message);
    }
}
//get one row from to do list/////////////////////////////////////////////////
export const getOnly = async function(req: Request, res: Response){
    const receivedData: any = req.query;
    let manager = getManager();
    try{
        /*
            get only the entries related to the project title
            note: tableData will contain array of row, so take tableData[0]
       */ 
        let tableData = await manager.find(ToDoList,{
            where: {title: receivedData.project},
            relations: ["contentKey"]
        }) 
        //if project doesn't exist in the database
        if(tableData[0] === undefined){
            throw new Error("GET: data doesn't exist");
        }
        //else
        // console.log(tableData);
        res.status(200).send(tableData[0]);
    }
    catch(error: any){
        console.log(error.message)
        res.status(400).send(error.message);
    }
}
//add one row to 'to do list'/////////////////////////////////////////////////
export const addData = async function(req: Request, res: Response){
    const receivedData: toDoLayout.toDoList = req.body;
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
                throw new Error("POST: data already exists");
            }
            //if not save the todolist table
            await manager.save(toDoList);
            //save todocontent table with foreign key
            for(const data in receivedData.content){
                let toDoContent = new ToDoContent();
                console.log(receivedData.content[data]);
                toDoContent.content = receivedData.content[data].text; 
                toDoContent.list_id_fk = toDoList;
                await manager.save(toDoContent);
            }

            //send the saved project to the frontend for user 
            let tableData = await manager.find(ToDoList,{
                where: {title: receivedData.title},
                relations: ["contentKey"]
            }) 
            console.log("POST: data saved");
            res.status(200).json(tableData[0]);
    }
    catch(error: any){
        console.log(error.message);
        res.status(400).json({error: error.message});
    };
}
//remove to do list rows/////////////////////////////////////////////////
export const removeData = async function(req: Request, res: Response){
    /*
        To remove a row from the table
        >> if the "deleteProject" flag is set
            >> find the listId from the todolist using project from receivedData
            >> first remove all the rows from the child table using the listId as key
            >> then remove the row from the parent with the project name as key
        >> else 
            >> remove only the content given in the received data from 
            the child table
    */
    const receivedData: toDoLayout.removeProject = req.body;
    let manager = getManager();
    try{
        let findList = await manager.findOne(ToDoList, {title: receivedData.project});
        //if the project doesn't exist
        if(findList === undefined){
            throw new Error("DELETE: data doesn't exist");
        }
        //if deleteProject is true, delete the project itself
        if(receivedData.deleteProject === true){
            //delete all the children with the foreign key "listid"
            let findContent = await manager.find(ToDoContent, {
                list_id_fk: findList
            })
            for(const content in findContent){
                await manager.remove(findContent[content]);
            }
            //then remove the parent 
            await manager.remove(findList);
            console.log("DELETE: project data deleted")
            res.status(200).send("DELETE: project deleted");
        }
        //else remove only the content in the child
        else{
            //delete the child with the foreign key "listid" and content receivedData.content
            let findContent = await manager.findOne(ToDoContent, {
                list_id_fk: findList,
                content: receivedData.content
            })
            if(findContent === undefined){
                throw new Error("DELET: content couldn't be found");
            }
            await manager.remove(findContent);
            console.log("DELETE: content data deleted");
            res.status(200).send("DELETE: content deleted");
        }
    }
    catch(error: any){
        console.log(error.message);
        res.status(400).send(error.message);
    }

}

//update to do list/////////////////////////////////////////////////
export const updateData = async function(req: Request, res: Response){
/*
    To update a row of a table in database
    >> check if the project exists 
            >> add the content 
*/
    const receivedData: toDoLayout.updateProject = req.body;

    let manager = getManager();
    try{
        let findList = await manager.findOne(ToDoList, {title: receivedData.project});
        //if project doesn't exist
        if(findList === undefined){
            throw new Error("PUT: data doesn't exist");
        }
        //else
        // check if the content already exists
        let findContent = await manager.findOne(ToDoContent, {content: receivedData.content});
        if(findContent !== undefined){
            throw new Error("PUT: content data already exists");
        }
        //else
        let toDoContent = new ToDoContent();
        toDoContent.content = receivedData.content;
        toDoContent.list_id_fk = findList;
        await manager.save(toDoContent);
        res.status(200).send("PUT: data updated");
        console.log("PUT: data updated");
    }
    catch(error: any){
        console.log(error.message);
        res.status(400).send(error.message);
    }

}
