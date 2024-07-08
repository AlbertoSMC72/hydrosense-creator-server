import config from "../config/config.js";

export const createData = async (data) => {
    

    config.startTransaction();
    try {
        await config.execute("INSERT INTO data set ?", [data]);
        config.commit();
        return {status: 200};
    } catch (error) {
        config.rollback();
        throw error;
    }
}

