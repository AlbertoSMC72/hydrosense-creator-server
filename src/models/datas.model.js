import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    data: {
        type: Array,
        required: true,
    },
    device: {
        type: Number,
        required: true,
    },
});

const Data = mongoose.model("Data", dataSchema);