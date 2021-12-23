import express from "express";
import toDoListRouter from "../router/toDoList.router";
import loginRouter from "../router/login.router";

const app = express();

const router = express.Router();

router.use("/toDoList", toDoListRouter);
router.use("/login", loginRouter);

export default router;