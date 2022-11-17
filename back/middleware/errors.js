const ErrorHandler = require('../utils/errorHandler')

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error"

    res.status(err.statusCode).json({
        succes: false,
        message: err.stack
    })

    //Error de clave duplicadad en mongose
    if (err.code === 11000) {
        const message = `Clave duplicada ${Object.keys(err.keyValue)}`
        error = new ErrorHandler(message, 400)
    }

    //Error en jwt
    if (err.name === "JsonWebTokenError") {
        const message = "Token de jason web token es invalido intenta de nuevo"
        error = new ErrorHandler(message, 400)
    }

    //jwt token expirado
    if (err.name === "TokenExpiredError") {
        const message = "El token de jwt expiro"
        error = new ErrorHandler(message, 400)
    }
}