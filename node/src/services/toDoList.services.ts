import { getManager } from "typeorm";
import ToDoContent from "../model/entity/toDoContent"
import ToDoList from "../model/entity/toDoList"
import {Request, Response} from "express";

//get all the to do list rows
export const getAll = function(req: Request, res: Response){
    
    res.status(200).send("ok")
}
//get all the to do list rows
export const getOnly = function(req: Request, res: Response){

}
//get one row from to do list
export const addData = function(req: Request, res: Response){

}
//remove to do list rows
export const removeData = function(req: Request, res: Response){

}

//update to do list
export const updateData = function(req: Request, res: Response){

}
