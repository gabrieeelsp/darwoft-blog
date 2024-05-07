const { check } = require('express-validator');
const { validateResult } = require('../../helpers/validateHelper');

module.exports = [
    check('token').exists().withMessage('El token es obligatorio.'),

    (req, res, next) => {
        validateResult(req, res, next);
    },
];
