import * as loginLayout from "../model/entity/login";
import Login from "../model/entity/login";
import { getManager } from "typeorm";
import { Request, Response } from "express";

export const auth = function(req: Request, res: Response) {
   console.log(req.body); 
   res.send("ok");
}