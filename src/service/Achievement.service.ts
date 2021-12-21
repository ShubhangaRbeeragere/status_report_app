import {getManager} from "typeorm";
import {Response, Request} from "express";
import { Achievements } from '../model/entity/Achievements';
import { Milestones } from '../model/entity/Milestone';
import { SubAchievements } from '../model/entity/sub_Achieve';

///////--------GET ALL ACHIEVEMENTS---------/////////


export const getDETAIL = async(req: Request, res: Response) =>
{
    let dataManager = getManager();
    let Data = await dataManager.find(Achievements); 
    console.log(Data);
    res.status(200).send(Data);
}
export const createDETAIL= async(req: Request, res: Response) => {

    console.log(req.body)

    let newData = new Achievements();
    newData.achievement_name = req.body.ACHIEVEMENT;
    newData.content = req.body.CONTENT;
    newData.date = req.body.DATE;

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



export const getDETAILByDATE = async(req: Request, res: Response) => {
    let receivedData: any = req.query;
    let manager = getManager();
    try{
        const achievement = await manager.findOne(Achievements, {date: receivedData.DATE});
        if(achievement === undefined){
            throw new Error("GET: user doesn't exist");
        }
        let finalData = {...achievement};
        res.status(200).send(finalData);
    }
    catch(error: any){
        console.log(error.message);
        res.status(400).send(error.message);
    }
}



export const addData = async(req: Request, res: Response) => {
    let manager = getManager();
    const receivedData = req.body.Achievements;
    const MILESTONES = receivedData.Milestones;
    const SUB_ACHIEVEMENTS = receivedData.SubAchievements;

   try{

        //check if data already exists
        let checkApplicant = await manager.findOne(Achievements,
            {date: receivedData.DATE})

        if(checkApplicant){
            throw new Error("POST: user already exists");
        }

        let achievements = new Achievements();
        achievements.achievement_name = receivedData.ACHIEVEMENT_NAME;
        achievements.content = receivedData.CONTENT;
        achievements.date = receivedData.DATE;



        //save applicantDetails
        await manager.save(achievements);
///////////////2>>>>>>>>>>>>>>>>>previous employment details///////////////////////////////////////////
        MILESTONES.forEach(async(employment) => {
           let  previousEmployment = new PreviousEmployment();
           previousEmployment.company_name = employment.company;
           previousEmployment.position = employment.position;
           previousEmployment.start_date = employment.startDate;
           previousEmployment.end_date = employment.endDate;
           previousEmployment.applicant_id_fk = applicantDetails;
           await manager.save(previousEmployment);
        })

//////////////3>>>>>>>>>>>>>>>>>Education details///////////////////////////////////////////////////////
        educationData.forEach(async(education) => {
            let institution = new Institution();
            let degree = new Degree();
            let specialization = new Specialization();
            let bridge = new Bridge;

            //save education
            let checkDegree = await manager.findOne(Degree, {degree: education.degree});
            let checkInstitution = await manager.findOne(Institution, {institution: education.institution});
            let checkCourse = await manager.findOne(Specialization, {course: education.specialization});

            //check if already exists, if not save it.
            //also save the foreign keys in bridge table w.r.t 'check' datas
            if(!checkInstitution){
                institution.institution = education.institution;
                await manager.save(institution); 
                bridge.institution_id_fk = institution;
            }
            else{
                bridge.institution_id_fk = checkInstitution;
            }

            if(!checkDegree){
                degree.degree = education.degree;
                await manager.save(degree);
                bridge.degree_id_fk = degree;
            }
            else{
                bridge.degree_id_fk = checkDegree;
            }

            if(!checkCourse){
                specialization.course = education.specialization;
                await manager.save(specialization);
                bridge.course_id_fk = specialization;
            }
            else{
                bridge.course_id_fk = checkCourse;
            }
            //save dates
            bridge.start_date = education.startDate;
            bridge.end_date = education.endDate;
            //save application foreign key in bridge table
            bridge.applicant_id_fk = applicantDetails;

            await manager.save(bridge);
            // let institution_id_fk = await manager.findOne(Institution, {institution: education.institution});
            // let degree_id_fk = await manager.findOne(Degree, {degree: education.degree});
            // let course_id = await manager.findOne(Specialization, {course: education.specialization});
        })
        console.log("POST: saved user succesfully");
        res.status(400).send("POST: data saved successfully");
   }
   catch(error: any){
       console.log(error.message);
       res.status(200).send(error.message);
   }
}
