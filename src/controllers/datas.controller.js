import { postDataService} from "../services/datas.service";

export const postDataController = async (req, res) => {
    postDataService(req.body)
        .then((data) => res.status(200).json(data))
        .catch((error) => res.status(500).send(error.message));
}