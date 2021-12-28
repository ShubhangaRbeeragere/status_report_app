import {getManager} from "typeorm";
import {Response, Request} from "express";
import { Achievements } from '../model/entity/Achievements';
import { SubAchievements } from '../model/entity/SubAchievements';
import { Milestones } from '../model/entity/Milestone';
import { StructureOF } from '../interface/Structure.interface';


///////--------GET ALL ACHIEVEMENTS---------/////////


export const getDETAIL = async(req: Request, res: Response) =>{
try{
    let dataManager = getManager();
    let Data = await dataManager.find(Achievements); 
    console.log(Data);
    res.status(200).send(Data);
}
catch(error: any){
    console.log(error.message);
    res.status(400).send(error.message);
}

}


export const getAllDETAIL = async(req: Request, res: Response) => {
    try{

        let achievement = await getManager().find(Achievements, {relations: ["sub_achievements_key","milestones_key"]},
    )

        res.status(200).send(achievement);

    }
    catch(error: any){
        console.log(error.message);
        res.status(400).send(error.message);
    }
    
}


export const getDETAILByDATE = async(req: Request, res: Response) => {
    let receivedData: any = req.query;
    let manager = getManager();
    try{
        const achievement = await manager.findOne(Achievements, {date: receivedData.DATE});
        if(achievement === undefined){
            throw new Error("specified achievement not found");
        }
        let finalData = {...achievement};
        res.status(200).send(finalData);
    }
    catch(error: any){
        console.log(error.message);
        res.status(400).send(error.message);
    }
}

export const getALLDETAILByDATE = async function(req: Request, res: Response){
    const receivedData: any = req.query;
    let manager = getManager();
    try{

        let Data = await manager.find(Achievements,{
            where: {date: receivedData.date},
            relations: ["sub_achievements_key","milestones_key"]
        }) 

        if(Data[0] === undefined){
            throw new Error("No Details found !");
        }

        res.status(200).send(Data);
    }
    catch(error: any){
        console.log(error.message)
        res.status(400).send(error.message);
    }
}
export const updateDETAIL = async(req: Request, res: Response) => {
    let manager = getManager();
    try{
        let updatedata = await manager.findOne(Achievements,
            {
                achievement_name : req.body.achievement_name,
            });
        if(updatedata === undefined){
            throw new Error("Data Doesn't Exist");
        }

        updatedata.achievement_name = req.body.ACHIEVEMENT_NAME;
        updatedata.content = req.body.CONTENT;
        updatedata.date = req.body.DATE;

        await manager.save(updatedata);


        console.log("Data Updated successfully");
        res.status(200).send("Data Updated");
    }
    catch(error: any){
        res.status(400).send(error.message);
        console.log(error.message);
    }
}

export const deleteDETAIL = async(req: Request, res: Response) => {
    let manager = getManager();
    try{
        let deleteDetails = await manager.findOne(Achievements,
            {

                date : req.body.DATE,
                achievement_name : req.body.achievement_name,

            });
        if(deleteDetails === undefined){
            throw new Error("Data Doesn't Exist");
        }
        await manager.remove(deleteDetails);
        console.log("Data Deleted");
        res.status(200).send("Data Deleted");
    } 
    catch(error: any){
        res.status(400).send(error.message);
        console.log(error.message);
    }
}


export const createDETAIL = async(req: Request, res: Response) => {
    let manager = getManager();
    const receivedData: StructureOF = req.body;
    const achievementsData = receivedData.Achievement;
    const subAchievementsData = receivedData.SubAchievement;
    const milestonesData = receivedData.Milestone;
    try{

        let checkAchievement = await manager.findOne(Achievements,
            {achievement_name: achievementsData.achievement_name})

        if(checkAchievement){
            throw new Error("Specified Achievement already exist");
        }

        let achievementDetails = new Achievements();
        achievementDetails.achievement_name = achievementsData.achievement_name;
        achievementDetails.content = achievementsData.content;
        achievementDetails.date = achievementsData.date;


        await manager.save(achievementDetails);


        subAchievementsData.forEach(async(subAchievements) => {
           let  subACHIEVEMENTS = new SubAchievements();
           subACHIEVEMENTS.sub_achievement_name = subAchievements.sub_achievement_name;
           subACHIEVEMENTS.content = subAchievements.content;
           subACHIEVEMENTS.sub_achievements_id_fk = achievementDetails;
           await manager.save(subACHIEVEMENTS);
        })

        milestonesData.forEach(async(milestonesDETAILS) => {
            let  MILESTONES = new Milestones();
            MILESTONES.title = milestonesDETAILS.title;
            MILESTONES.content = milestonesDETAILS.content;
            MILESTONES.milestones_id_fk = achievementDetails;
            await manager.save(MILESTONES);
         })
         
        console.log("Data saved succesfully");
        res.status(200).send("Data saved succesfully");
   }

   catch(error: any){
    console.log(error.message);
    res.status(400).send(error.message);
}

}

export const UpdateDETAILS = async function(req: Request, res: Response){

    const receivedData: StructureOF = req.body;
    const achievementsData = receivedData.Achievement;
    const subAchievementsData = receivedData.SubAchievement;
    const milestonesData = receivedData.Milestone;


    let manager = getManager();
    try{
        let achievement = await manager.findOne(Achievements, {achievement_name: achievementsData.achievement_name});
        if(achievement === undefined){
            throw new Error("no data found");
        }
        achievement.content = achievementsData.content;
        achievement.date = achievementsData.date;
        await manager.save(achievement);
 

      

        

        subAchievementsData.forEach(async(subAchievements) => {
            let updatedsubachievement= new SubAchievements();
            updatedsubachievement.sub_achievement_name = subAchievements.sub_achievement_name;
            updatedsubachievement.content = subAchievements.content;

    
            await manager.save(updatedsubachievement);
        })

        res.status(200).send("data updated");
        console.log("data updated");

    }
    catch(error: any){
        console.log(error.message);
        res.status(400).send(error.message);
    }

}

export const deleteDetail = async(req: Request, res: Response) => {
    const receivedData: StructureOF = req.body;
    const achievementsData = receivedData.Achievement;

    let manager = getManager();
    try{
      
        const achievement = await manager.findOne(Achievements, 
            {achievement_name: achievementsData.achievement_name});
        if(achievement === undefined){
            throw new Error("No data found corresponding to the Achievement Name you've entered");
        }
        //deleting sub_achievements
        let sub_achievement = await manager.find(SubAchievements, 
            {
                where: {sub_achievements_id_fk: achievement}
            })
        sub_achievement.forEach(async(sub_achievements) => {
            await manager.remove(sub_achievements);
        })

        //deleting milestones
        let milestone = await manager.find(Milestones, 
            {
                where: {milestones_id_fk: achievement}
            })
        milestone.forEach(async(milestones) => {
            await manager.remove(milestones);
        })
        

        //deleting achievement
        await manager.remove(achievement)
        .then(
            () => {
                console.log("Deleted the specified data")
                res.status(200).send("Deleted the specified data");
            }
        )
        .catch(err => {console.log(err.message)})
    }
    catch(error: any){
       console.log(error.message);
       res.status(200).send(error.message);
    }
}