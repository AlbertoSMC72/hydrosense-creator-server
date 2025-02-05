import { createData } from "../repositories/datas.repositories.js";
import { validateData } from "../models/datas.model.js";
import { io } from 'socket.io-client';

export const postDataService = async (req) => {
    try {
        const data = validateData(req.body);
        if (!data.success) {
            // Crear un cliente de Socket.IO
            const socket = io('http://localhost:8080'); // Asegúrate de usar http://

            // Promesa para manejar la conexión y el envío de mensajes
            await new Promise((resolve, reject) => {
                socket.on('connect', () => {
                    // Enviar mensaje al servidor
                    socket.emit('message', req.body);
                });

                socket.on('message', (response) => {
                    console.log('Respuesta del servidor:', response);
                    socket.disconnect();
                    resolve();
                });

                socket.on('error', (err) => {
                    console.error('Socket.IO error:', err);
                    socket.disconnect();
                    reject(err);
                });
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
