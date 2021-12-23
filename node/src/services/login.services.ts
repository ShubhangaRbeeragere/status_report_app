import { getManager } from "typeorm";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import brcyptjs from "bcryptjs";
import * as loginLayout from "../model/interface/login.interface";
import Login from "../model/entity/login";

export const save = async function(req: Request, res: Response) {
    const user: loginLayout.login = req.body;
    let login = new Login();
    let manager = getManager();
    //check if user already exist in the database
    try{
        let findUser = await manager.findOne(Login, {username: user.username}); 
        if(findUser){
            console.log("LogIn: user already exists");
            throw new Error("user exists");
        }
        login.username = user.username;
        login.password = user.password;
        await manager.save(login);
        console.log("user saved");
        res.status(200).send("user saved");
    }
    catch(error: any){
        res.status(400).send("error occured");
        console.log(error.message);
    }
}

//verify the user login credentials
export const auth = function(req: Request, res: Response) {


    // jwt.sign(user, process.env.TOKEN_KEY || "secretKey", {expiresIn: '30min'}, (err, token) => {
    //     if(err){
    //         console.log(err.message);
    //         res.status(500).send("POST: error occured");
    //     }
    //     else{
    //         res.status(200).json({token});
    //     }
    // })

}

//verify the token
export const verifyUser = function(req: Request, res: Response) {
    let token: any = req.headers.token;
    // console.log("token ", token);
    try{
        if(!token){
            throw new Error("POST: need token");
        }
        jwt.verify(token, process.env.TOKEN_KEY || "secretKey", (err: any, decoded: any) => {
            if(err){
                throw new Error("POST: unauthorised")
            }
            res.status(200).send("successful");
        })
    }
    catch(error: any){
        res.status(401).send(error.message);
    }
}