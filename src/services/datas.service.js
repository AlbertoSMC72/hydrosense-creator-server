import { createData } from "../repositories/datas.repositories";

export const postDataService = async (req) => {
    try {
        //logica para el servidor en tiempo real
        return await createData(req.body);
    } catch (error) {
        throw error;
    }
}