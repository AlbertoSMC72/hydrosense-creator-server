import { postEngineController } from "../controllers/engine.controller";
import { Router } from "express";

const engineRouter = Router();

engineRouter.post('/', postEngineController);

export default engineRouter;