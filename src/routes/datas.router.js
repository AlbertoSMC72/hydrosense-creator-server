import { Router } from "express";
import { postDataController } from "../controllers/datas.controller.js";

const datasRouter = Router();

datasRouter.post('/', postDataController);

export default datasRouter;