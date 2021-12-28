import "reflect-metadata";
import express, { application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import BasicRouter from "./init/Router"
import bodyParser from "body-parser";
import { getManager } from "typeorm";
import sqlConnection from './init/connection';

dotenv.config();
let app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/", BasicRouter);

sqlConnection
.then(
    async() => {
        const database = (process.env.database as string);
        console.log("|||||||||||||||||||||||||||||||||||||||||||||||||||||||")
        console.log(`       Database :( ${database} ) connected successfully`)
        console.log("|||||||||||||||||||||||||||||||||||||||||||||||||||||||")
    }
)
.catch(
    (error) => {console.log(error.message)}
);

const PORT: number = parseInt(process.env.PORT as string, 10);
app.listen(PORT || 8080, () => {
    console.log(`listening on port ${PORT}`);
})