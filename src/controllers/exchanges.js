const Exchange = require('../models/Exchange');
const { sendResponse, sendError } = require('../utils/sendResponse');

exports.setPairExchange = async (req, res) => {
    try {
        const { from, to, multiplier } = req.body;
        const pairExists = await Exchange.findOne({ pair: `${from}-${to}` });
        if (pairExists) {
            return sendError(res, 400, 'El par de monedas ya existe');
        };
        const exchange = await Exchange.create({
            pair: `${from}-${to}`,
            fromCurrency: from,
            toCurrency: to,
            multiplier: multiplier
        });
        sendResponse(res, 201, exchange, `Has configurado la cotización del par ${from.toUpperCase()} - ${to.toUpperCase()}`);
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
        const { pair } = req.query;
        let query = {};
        if (pair) {
            query.pair = pair;
        }
        const exchanges = await Exchange.find(query);
        if (exchanges.length === 0) return sendResponse(res, 404, exchanges, 'Aún no has configurado ningún par de monedas');
        sendResponse(res, 200, exchanges);
    } catch (error) {
        return sendError(res, 500, error.message);
    }
};