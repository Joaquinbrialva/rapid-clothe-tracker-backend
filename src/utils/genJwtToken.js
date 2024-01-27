const jwt = require('jsonwebtoken');

function generateToken(userData) {
    const secretKey = process.env.JWT_SECRET_KEY;

    if (!secretKey) {
        throw new Error('La variable de entorno JWT_SECRET_KEY no está configurada.');
    }

    const payload = {
        id: userData._id
    }

    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

    return token;
};

module.exports = { generateToken };