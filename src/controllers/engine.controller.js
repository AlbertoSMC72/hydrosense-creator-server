import { postEngineService, putEngineService } from "../services/engine.service";

export const postEngineController = async (req, res) => {
    postEngineService(req)
        .then((data) => res.status(200).json(data))
        .catch((error) => res.status(500).send(error.message));
}

export const putEngineController = async (req, res) => {
    putEngineService(req)
        .then((data) => res.status(200).json(data))
        .catch((error) => res.status(500).send(error.message));
}