const { validationResult } = require('express-validator');
const ClientError = require('../errors/ClientError');

const validateResult = (req, res, next) => {
    try {
        validationResult(req).throw();
        next();
    } catch (error) {
        next(
            new ClientError(
                422,
                'Existen errores en el formulario',
                error.array().map((e) => {
                    return {
                        field: e.path,
                        message: e.msg,
                    };
                }),
            ),
        );
    }
    return undefined;
};

module.exports = { validateResult };
