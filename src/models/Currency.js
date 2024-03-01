const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const CurrencySchema = new Schema({
    code: {
        type: String,
        uppercase: true,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    valueToUSD: {
        type: Number,
    },
    valueToUYU: {
        type: Number,
    }
}, { timestamps: true });

const Currency = model('Currency', CurrencySchema);

module.exports = Currency;