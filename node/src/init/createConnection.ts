import { createConnection } from "typeorm";
import ToDoContent from "../model/entity/toDoContent";
import ToDoList from "../model/entity/toDoList";
import Login from "../model/entity/login";
import { Achievements } from "../model/entity/achievement";
import { Milestones } from "../model/entity/milestone";
import { SubAchievements } from "../model/entity/subAchievements";

export const makeConnection = createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "12345678",
    database: "weekly_status_report",
    synchronize: true,
    entities: [
        ToDoList,
        ToDoContent,
        Login,
        Achievements,
        SubAchievements,
        Milestones,
    ],
});
