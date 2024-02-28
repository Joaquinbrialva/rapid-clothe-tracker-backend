function sendResponse(res, statusCode, data, message) {
    res.status(statusCode).json({
        status: statusCode === 200 || statusCode === 201 ? 'success' : 'error',
        data: data,
        message: message ? message : null
    });
};

function sendError(res, statusCode, message) {
    console.log(message);
    res.status(statusCode).json({
        status: 'error',
        message: message,
    });
};

module.exports = { sendResponse, sendError };