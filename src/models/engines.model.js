import mongoose from 'mongoose';

const engineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    HP: { /* Caballos por minuto */
        type: Number,
        required: true
    },
    voltage: {
        type: Number,
        required: true
    },
    amperage: {
        type: Number,
        required: true
    },
    frecuency: {
        type: Number,
        required: true
    },
    RPM: { /* Revoluciones por minuto */
        type: Number,
        required: true
    }
});

const Engine = mongoose.model('Engine', engineSchema);

export default Engine;