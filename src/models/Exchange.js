const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const CurrencyExchangeSchema = new Schema({
    fromCurrency: {
        type: Number,
        required: true
    },
    toCurrency: {
        type: Number,
        required: true
    },
    exchangeRate: {
        type: Number,
        required: true
    },
}, { timestamps: true });

const CurrencyExchange = model('CurrencyExchange', CurrencyExchangeSchema);

module.exports = CurrencyExchange;