import Report from "../models/repots.model";

export const postReport = async (report) => {
    return await Report.create(report);
};
