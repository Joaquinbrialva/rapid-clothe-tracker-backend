function sendResponse(res, statusCode, data, message) {
    res.status(statusCode).json({
        status: statusCode === 200 || 201 ? 'success' : 'error',
        data: data,
        message: message
    });
}

function sendError(res, statusCode, message) {
    res.status(statusCode).json({
        status: 'error',
        message: message,
    });
}

module.exports = { sendResponse, sendError };