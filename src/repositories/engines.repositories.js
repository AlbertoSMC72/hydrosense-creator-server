import config from "../config/config.js";

export const postEngine = async (engine) => {
    try {
        await config.execute("INSERT INTO engine set ?", [engine]);
        return { status: 200, message: "Engine created" };
    } catch (error) {
        throw { status: 500, message: "Internal Server Error", error };
    }
}

export const updateEngine = async (engine, id) => {
    config.startTransaction();
    try {
        await config.execute("UPDATE engine set ? WHERE id_engine = ?", [engine, id]);
        config.commit();
        return { status: 200, message: "Engine updated" };
    } catch (error) {
        config.rollback();
        throw { status: 500, message: "Internal Server Error", error };
    }
}