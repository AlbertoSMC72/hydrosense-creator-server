import { postEngineController, putEngineController } from "../controllers/engine.controller";

import { Router } from "express";

const engineRouter = Router();

engineRouter.post('/', postEngineController);
engineRouter.put('/:id', putEngineController);

export default engineRouter;