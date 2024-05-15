const { check } = require('express-validator');
const { validateResult } = require('../../helpers/validateHelper');

module.exports = [
    check('name')
        .exists()
        .withMessage('El nombre es obligatorio')
        .trim()
        .not()
        .isEmpty()
        .withMessage('El nombre no puede quedar vacío'),
    check('description')
        .exists()
        .withMessage('La descripción es obligatoria')
        .trim()
        .not()
        .isEmpty()
        .withMessage('La descripción no puede quedar vacía'),
    check('isVisible')
        .isBoolean()
        .withMessage('Existe un error en el campo isVisible'),

    (req, res, next) => validateResult(req, res, next),
];
