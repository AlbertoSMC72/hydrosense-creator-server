import { createData} from "../repositories/datas.repositories.js";
import { validateData } from "../models/datas.model.js";

export const postDataService = async (req) => {
    try {
        //logica para el servidor en tiempo real
        const data = validateData(req.body);
        if(data.success){
            const dataRes = await createData(req.body);
            return dataRes;
        }else {
            throw new Error(data.error.message)
        }
    } catch (error) {
        throw error;
    }
}