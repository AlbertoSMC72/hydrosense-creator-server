import { postReport } from "../repositories/reports.repositories";

export const postReportService = async (req) => {
    try {
        //logica para el servidor en tiempo real
        return await postReport(req);
    } catch (error) {
        throw error;
    }
}