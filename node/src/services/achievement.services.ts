import { getManager } from "typeorm";
import { Response, Request } from "express";
import { Achievements } from "../model/entity/achievement";
import { SubAchievements } from "../model/entity/subAchievement";
import { Milestones } from "../model/entity/milestone";
import { StructureOF } from "../model/interface/structure.interface";

export const getAll = async (req: Request, res: Response) => {
    try {
        let achievement = await getManager().find(Achievements, {
            relations: ["sub_achievements_key", "milestones_key"],
        });

        res.status(200).send(achievement);
    } catch (error: any) {
        console.log(error.message);
        res.status(400).send(error.message);
    }
};

export const addData = async (req: Request, res: Response) => {
    let manager = getManager();
    const receivedData: StructureOF = req.body;
    const achievementsData = receivedData.Achievement;
    const subAchievementsData = receivedData.SubAchievement;
    const milestonesData = receivedData.Milestone;
    try {
        let checkAchievement = await manager.findOne(Achievements, {
            achievement_name: achievementsData.achievement_name,
        });

        if (checkAchievement) {
            throw new Error("Specified Achievement already exist");
        }

        let achievementDetails = new Achievements();
        achievementDetails.achievement_name = achievementsData.achievement_name;
        achievementDetails.content = achievementsData.content;
        achievementDetails.date = achievementsData.date;

        await manager.save(achievementDetails);

        subAchievementsData.forEach(async (subAchievements) => {
            let subACHIEVEMENTS = new SubAchievements();
            subACHIEVEMENTS.sub_achievement_name =
                subAchievements.sub_achievement_name;
            subACHIEVEMENTS.content = subAchievements.content;
            subACHIEVEMENTS.sub_achievements_id_fk = achievementDetails;
            await manager.save(subACHIEVEMENTS);
        });

        milestonesData.forEach(async (milestonesDETAILS) => {
            let MILESTONES = new Milestones();
            MILESTONES.title = milestonesDETAILS.title;
            MILESTONES.content = milestonesDETAILS.content;
            MILESTONES.milestones_id_fk = achievementDetails;
            await manager.save(MILESTONES);
        });

        console.log("Data saved succesfully");
        res.status(200).send("Data saved succesfully");
    } catch (error: any) {
        console.log(error.message);
        res.status(400).send(error.message);
    }
};
