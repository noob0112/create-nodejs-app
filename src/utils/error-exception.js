const logger = require('./logger')

const NOT_FOUND = (req, res) => {
    res.status(404).json(responseError(req.statusCode || 404, req.message || 'Not found'));
}

const INTERNAL_SERVER_ERROR = ((req, res) => {
    res.status(500).json(responseError(req.statusCode || 500, req.message || 'Internal Server Error'));
    logger.error(`${err.status || 500} - ${res.statusMessage} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
})

function responseError(statusCode, message, error) {
    return {
        statusCode,
        message,
        error: error || message
    }
}

module.exports = { NOT_FOUND }