const { validationResult } = require('express-validator');

const validateResult = (req, res, next) => {
    try {
        validationResult(req).throw();
        next();
    } catch (error) {
        return res.status(400).json({
            error: {
                message: 'Existen errores en el formulario',
                data: error.array().map((e) => {
                    return {
                        field: e.path,
                        message: e.msg,
                    };
                }),
            },
        });
    }
    return undefined;
};

module.exports = { validateResult };
