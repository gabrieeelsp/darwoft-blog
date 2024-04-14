const { check } = require('express-validator');
const { validateResult } = require('../../helpers/validateHelper');

module.exports = [
    check('email')
        .exists()
        .withMessage('El email es obligatorio.')
        .trim()
        .isEmail()
        .withMessage('El email no puede quedar vacío.'),
    check('password')
        .exists()
        .withMessage('El password es obligatorio.')
        .trim()
        .not()
        .isEmpty()
        .withMessage('El password no puede quedar vacío.'),

    (req, res, next) => {
        validateResult(req, res, next);
    },
];
