import {getManager} from "typeorm";
import {Response, Request} from "express";
import { Achievements } from '../model/entity/Achievements';
import { SubAchievements } from '../model/entity/SubAchievements';
import { Milestones } from '../model/entity/Milestone';
import { StructureOF } from '../interface/Structure.interface';
import { StructureFORupdate } from '../interface/test.interface';


export const UpdateDETAILS = async function(req: Request, res: Response){

    const receivedData: StructureFORupdate = req.body;
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
