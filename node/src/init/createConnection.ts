import { createConnection } from "typeorm";
import toDoList from "../model/entity/toDoList"


export const makeConnection = createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "12345678",
    database: "weekly_status_report",
    synchronize: false,
    entities: [
        toDoList
    ]
});
