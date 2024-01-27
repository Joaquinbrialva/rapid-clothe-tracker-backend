const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const SalesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    boughtFrom: {
        tpye: Number,
        required: true
    },
    clotheSold: {
        type: mongoose.Types.ObjectId,
        ref: 'Clothe'
    },
    soldTo: {
        type: Number,
        required: true
    },
    soldBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

const Sales = model('Sales', SalesSchema);

module.exports = Sales;