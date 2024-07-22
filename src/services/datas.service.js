import { createData } from "../repositories/datas.repositories.js";
import { validateData } from "../models/datas.model.js";
import WebSocket from 'ws';

export const postDataService = async (req) => {
    try {
        const data = validateData(req.body);
        if (!data.success) {
            // Crear un WebSocket client y enviar infoToSend
            const ws = new WebSocket('ws://localhost:8080');
            

            ws.on('open', function open() {
                ws.send(JSON.stringify(req.body));
            });

            ws.on('error', function error(err) {
                console.error('WebSocket error:', err);
            });

            // Lógica para enviar a la DB
            const dataRes = await createData(req.body);
            return dataRes;
        } else {
            throw new Error(data.error.message);
        }
    } catch (error) {
        throw error;
    }
};
