const Clothe = require('../models/Clothe');
const { sendResponse, sendError } = require('../utils/sendResponse');

exports.getClothes = async (req, res) => {
    try {
        const clothes = await Clothe.find();

        if (!clothes) {
            return sendError(res, 404, 'No se encontraron prendas');
        }

        sendResponse(res, 200, clothes, 'Prendas obtenidas correctamente');
    } catch (err) {
        return sendError(res, 500, err.message);
    }
};

exports.getClothe = async (req, res) => {
    try {
        const { clotheId } = req.params;
        const clothe = await Clothe.findById(clotheId);

        if (!clothe) {
            return sendError(res, 404, 'No se encontró la prenda');
        };

        sendResponse(res, 200, clothe, 'Prenda obtenida correctamente');
    } catch (err) {
        sendError(res, 500, err.message);
    }
};

exports.createClothe = async (req, res) => {
    try {
        const clothe = await Clothe.create({
            ...req.body
        });
        sendResponse(res, 201, clothe, 'Prenda registrada correctamente');
    } catch (error) {
        sendError(res, 500, error.message);
    }
};