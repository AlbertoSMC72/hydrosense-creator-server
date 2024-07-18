import config from "../config/config.js";

export const createData = async (data) => {
        try {
        await config.execute("INSERT INTO datas (`date`, `data`, `engine_ref_data`) VALUES (?, ?, ?)", [data.date , data.data, data.engine_ref_data]);
        return {status: 200};
    } catch (error) {
        throw error;
    }
}

