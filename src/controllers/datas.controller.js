import { postDataService} from "../services/datas.service.js";

export const postDataController = async (req, res) => {
    postDataService(req)
        .then((data) => res.status(200).json(data))
        .catch((error) => res.status(500).send(error.message));
}