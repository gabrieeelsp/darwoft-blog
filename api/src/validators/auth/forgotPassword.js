const { check } = require('express-validator');
const { validateResult } = require('../../helpers/validateHelper');

module.exports = [
    check('email')
        .exists()
        .withMessage('El email es obligatorio.')
        .trim()
        .isEmail()
        .withMessage('El email no tiene un formato correcto.'),

    (req, res, next) => {
        validateResult(req, res, next);
    },
];
