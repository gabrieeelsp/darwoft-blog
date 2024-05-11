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
    check('category-id')
        .exists()
        .withMessage('La categoría es obligatoria')
        .isMongoId()
        .withMessage('Error de formato'),
    check('content').optional().trim(),
    check('excerpt').optional().trim(),
    check('isVisible')
        .isBoolean()
        .withMessage('Existe un error en el campo isVisible'),

    (req, res, next) => validateResult(req, res, next),
];
