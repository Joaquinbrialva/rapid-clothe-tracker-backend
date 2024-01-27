const jwt = require('jsonwebtoken');

function decodeToken(token) {
    const secretKey = process.env.JWT_SECRET_KEY;

    if (!secretKey) {
        throw new Error('La variable de entorno JWT_SECRET_KEY no está configurada.');
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        return decoded;
    } catch (error) {
        throw new Error('Error al decodificar el token');
    }
};

module.exports = { decodeToken };