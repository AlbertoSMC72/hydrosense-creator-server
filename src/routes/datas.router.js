import { Router } from "express";
import { postDataController } from "../controllers/datas.controller";

const datasRouter = Router();

datasRouter.post('/', postDataController);

export default datasRouter;