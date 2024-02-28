const User = require('../models/User');
const { generateToken } = require('../utils/genJwtToken');
const { sendResponse, sendError } = require('../utils/sendResponse');

exports.signUp = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.create({ email, password });
        sendResponse(res, 200, user, 'Usuario creado correctamente');
    } catch (error) {
        return sendError(res, 500, error.message);
    }
};

exports.signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return sendError(res, 404, 'Usuario no encontrado');
        };

        if (user.password !== password) {
            return sendError(res, 401, 'Contraseña incorrecta');
        };

        user.logged = true;
        await User.save();

        const token = generateToken(user);

        const response = { user, token }

        sendResponse(res, 200, response, 'Usuario logueado correctamente');
    } catch (error) {
        return sendError(res, 500, error.message);
    }
};