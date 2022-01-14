import { createConnection } from "typeorm";
import "reflect-metadata";
import { Achievements } from '../model/entity/Achievements';
import { Milestones } from '../model/entity/Milestone';
import { SubAchievements } from '../model/entity/SubAchievements';


const sqlConnection = createConnection(
  {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "2120Ae@$#",
    database: "new",

    entities: [
      Achievements,
      Milestones,
      SubAchievements

    ],
    synchronize: true,
    logging:true
  }
)


export default sqlConnection;
