import "reflect-metadata";
import express, { application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import BasicRouter from "./init/Router"
import connect from "./init/connection"
import bodyParser from "body-parser";

//testing

import { getManager } from "typeorm";

//testing
dotenv.config();
let app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/", BasicRouter);

//connect to the database and check for errors
connect
.then(
    async() => {
        console.log("connected")
        console.log("--------------------------------")
        // let data = await getManager().find(Bridge, {relations: ["applicant_id_fk", "institution_id_fk", "degree_id_fk", "course_id_fk"]})
        // console.log(data);
        console.log("--------------------------------")
    }
)
.catch(
    (error) => {console.log(error.message)}
);

//provide the port details for the http requests
const PORT: number = parseInt(process.env.PORT as string, 10);
app.listen(PORT || 8080, () => {
    console.log(`listening on port http://localhost:${PORT}`);
})