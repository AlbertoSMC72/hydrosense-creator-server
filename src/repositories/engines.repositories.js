import Engine from "../models/engines.model";

export const postEngine = async (engine) => {
    try {
        return await Engine.create(engine);
    } catch (error) {
        throw error;
    }
}