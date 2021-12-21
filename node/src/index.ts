import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import mainRouter from "../src/init/mainRouter";
import {makeConnection} from "../src/init/createConnection";

dotenv.config();
if (!process.env.PORT) {
   process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use("/", mainRouter);

//create connection with database before using functions
makeConnection
.then(
    () => {
        console.log("connected");
    }
)
.catch(
    (err:any) => console.log(err)
)


//listen to the PORT defined in .evn file
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});