const Currency = require('../models/Currency');
const { sendResponse, sendError } = require('../utils/sendResponse');

exports.setCurrencyExchange = async (req, res) => {
    try {
        const { code, name, valueToUSD, valueToUYU } = req.body;

        const currencyExists = await Currency.findOne({ code });

        if (currencyExists) {
            return sendError(res, 400, 'La moneda ya existe en la base de datos');
        }

        const currency = await Currency.create({ code, name, valueToUSD, valueToUYU });

        sendResponse(res, 201, currency, 'Moneda creada correctamente');
    } catch (error) {
        return sendError(res, 500, error.message);
    }
};

exports.editPairExchange = async (req, res) => {
    try {
        const { pairId } = req.params;
        const { newMultiplier } = req.body;
        const newExchange = await Exchange.findByIdAndUpdate(pairId, { multiplier: newMultiplier }, { new: true });
        sendResponse(res, 200, newExchange, `Has actualizado la cotización del par ${newExchange.pair}`);
    } catch (error) {
        return sendError(res, 500, error.message);
    }
};

exports.getPairs = async (req, res) => {
    try {
        const currencies = await Currency.find();
        if (currencies.length === 0) return sendResponse(res, 404, currencies, 'Aún no has configurado ningún par de monedas');
        sendResponse(res, 200, currencies);
    } catch (error) {
        return sendError(res, 500, error.message);
    }
};