const { check } = require('express-validator');
const { validateResult } = require('../../helpers/validateHelper');

module.exports = [
    check('title')
        .exists()
        .withMessage('El título es obligatorio')
        .trim()
        .not()
        .isEmpty()
        .withMessage('El título no puede quedar vacío'),

    (req, res, next) => validateResult(req, res, next),
];
