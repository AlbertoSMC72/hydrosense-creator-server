import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
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

const Report = mongoose.model("Report", reportSchema);

export default Report;