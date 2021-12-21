import express from "express";
import toDoListRouter from "../router/toDoList.router";

const app = express();

const router = express.Router();

router.use("/toDoList", toDoListRouter);


export default router;