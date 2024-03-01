const Clothe = require('../models/Clothe');
const { sendResponse, sendError } = require('../utils/sendResponse');

exports.getClothes = async (req, res) => {
    try {
        const clothes = await Clothe.find();
        if (clothes.length === 0) return sendError(res, 404, 'No se encontraron prendas');
        sendResponse(res, 200, clothes, 'Prendas obtenidas correctamente');
    } catch (err) {
        return sendError(res, 500, err.message);
    }
};

exports.getClothe = async (req, res) => {
    try {
        const { clotheId } = req.params;
        const clothe = await Clothe.findById(clotheId);
        if (!clothe) return sendError(res, 404, 'No se encontró la prenda');
        sendResponse(res, 200, clothe, 'Prenda obtenida correctamente');
    } catch (err) {
        return sendError(res, 500, err.message);
    }
};

exports.registerClothe = async (req, res) => {
    try {
        const clothe = await Clothe.create({
            ...req.body
        });
        sendResponse(res, 201, clothe, 'Prenda registrada correctamente');
    } catch (error) {
        return sendError(res, 500, error.message);
    }
};

exports.registerClotheSale = async (req, res) => {
    try {
        const { clotheId } = req.params;
        const { soldPrice } = req.body;
        const clothe = await Clothe.findById(clotheId);
        if (!clothe) return sendError(res, 404, 'No se encontró la prenda');
        clothe.sold = true;
        clothe.soldPrice = soldPrice;
        await clothe.save();
        sendResponse(res, 200, clothe, "Prenda vendida, ¡sigamos así!");
    } catch (error) {
        sendError(res, 500, error.message);
    }
};

exports.deleteClothe = async (req, res) => {
    try {
        const { clotheId } = req.params;
        const clothe = await Clothe.findByIdAndDelete(clotheId);
        if (!clothe) return sendError(res, 404, 'No se encontró la prenda');
        sendResponse(res, 200, clothe, 'Prenda eliminada correctamente');
    } catch (error) {
        return sendError(res, 500, error.message);
    }
};