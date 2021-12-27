import { Response, Request } from "express";
import jwt from "jsonwebtoken";
export const verifyToken = function(req: Request, res: Response ,next: any) {
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
            // res.status(200).send("successful");
            next();
        })
    }
    catch(error: any){
        res.status(401).send(error.message);
    }
}