import { getManager } from "typeorm";
import { Achievements } from "../model/entity/Achievements";
import {Response, Request} from "express";

export const createADETAIL= async(req: Request, res: Response) => {

    console.log(req.body)

    let newData = new Achievements();
    newData.achievement_name = req.body.achievement_name;
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


// export const deleteData = async(req: Request, res: Response) => {
//     let receivedData: personalDetailsLayout.mailAndName = req.body;
//     let deleteInstitution: number[] = [];
//     let deleteDegree: number[] = [];
//     let deleteCourse: number[] = [];

//     let manager = getManager();
//     try{
//         //get the applicant
//         const applicant = await manager.findOne(ApplicantDetails, {email_address: receivedData.emailAddress});
//         if(applicant === undefined){
//             throw new Error("GET: user doesn't exist");
//         }
//         //remove previous employment
//         let employeeData = await manager.find(PreviousEmployment, 
//             {
//                 where: {applicant_id_fk: applicant}
//             })
//         employeeData.forEach(async(employee) => {
//             await manager.remove(employee);
//         })
