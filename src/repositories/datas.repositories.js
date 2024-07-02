import Data from "../models/datas.model.js";

export const createData = async (req) => {
    try {
        return await Data.create(req.body);
    } catch (error) {
        throw new Error(`Error creating data: ${error.message}`);
    }
}

