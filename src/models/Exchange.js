const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const CurrencyExchangeSchema = new Schema({
    pair: {
        type: String,
        uppercase: true,
        unique: true
    },
    fromCurrency: {
        type: String,
        required: true,
        uppercase: true,
        enum: ['ARS', 'UYU', 'USD']
    },
    toCurrency: {
        type: String,
        required: true,
        uppercase: true,
        enum: ['ARS', 'UYU', 'USD']
    },
    multiplier: {
        type: Number,
        required: true
    },
    exchangeRate: Number,
}, { timestamps: true });

const CurrencyExchange = model('CurrencyExchange', CurrencyExchangeSchema);

module.exports = CurrencyExchange;