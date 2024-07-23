import { createData } from "../repositories/datas.repositories.js";
import { validateData } from "../models/datas.model.js";
import { io } from 'socket.io-client';

export const postDataService = async (req) => {
    try {
        const data = validateData(req.body);
        if (!data.success) {
            // Crear un cliente de Socket.IO y enviar infoToSend
            const socket = io('http://44.199.91.75:8080');

            socket.on('connect', () => {
                socket.emit('message', req.body);
            });

            socket.on('error', (err) => {
                console.error('Socket.IO error:', err);
            });
            
            // Desconectar el socket después de enviar los datos
            socket.disconnect();

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
