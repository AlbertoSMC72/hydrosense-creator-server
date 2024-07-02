import { postEngine } from "../repositories/engines.repositories";

export const postEngineService = async (req) => {
    try {
        return await postEngine(req);
    } catch (error) {
        throw
    }
}