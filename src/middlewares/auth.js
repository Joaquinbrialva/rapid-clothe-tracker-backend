const { decodeToken } = require('../utils/decodeToken');

function isAuth(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send({ message: 'No token provided' });
    }
    const token = req.headers.authorization.split(' ')[1];
    decodeToken(token)
        .then(response => {
            req.user = response;
            next();
        })
        .catch(response => {
            res.status(response.status).send({ message: 'Invalid token' });
        })
}

module.exports = isAuth;