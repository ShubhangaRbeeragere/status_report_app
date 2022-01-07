import express from "express";
import toDoListRouter from "../router/toDoList.router";
import loginRouter from "../router/login.router";
import achievementRouter from "../router/achivement.router";

const app = express();

const router = express.Router();

router.use("/toDoList", toDoListRouter);
router.use("/login", loginRouter);
router.use("/achievement", achievementRouter);

export default router;
