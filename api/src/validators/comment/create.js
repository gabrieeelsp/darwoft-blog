const { check } = require('express-validator');
const { validateResult } = require('../../helpers/validateHelper');

module.exports = [
    check('post-id')
        .exists()
        .withMessage('La categoría es obligatoria')
        .isMongoId()
        .withMessage('Error de formato'),
    check('content')
        .exists()
        .withMessage('El contenido es obligatorio')
        .trim()
        .not()
        .isEmpty()
        .withMessage('El contenido no puede quedar vacío'),

    (req, res, next) => validateResult(req, res, next),
];
