import { postEngine, updateEngine } from "../repositories/engines.repositories";

export const postEngineService = async (req) => {
    try {
        return await postEngine(req.body);
    } catch (error) {
        throw
    }
}

export const putEngineService = async (req) => {
    try {
        return await updateEngine(req.body, req.params.id);
    } catch (error) {
        throw
    }
}