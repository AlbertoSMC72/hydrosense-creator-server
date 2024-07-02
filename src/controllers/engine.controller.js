import { postEngineService } from "../services/engine.service";

export const postEngineController = async (req, res) => {
    postEngineService(req.body)
        .then((data) => res.status(200).json(data))
        .catch((error) => res.status(500).send(error.message));
}