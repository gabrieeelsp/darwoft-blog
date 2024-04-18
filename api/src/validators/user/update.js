const { check } = require('express-validator');
const { validateResult } = require('../../helpers/validateHelper');

module.exports = [
    check('name')
        .optional()
        .trim()
        .not()
        .isEmpty()
        .withMessage('El nombre no puede quedar vacio.'),
    check('surname')
        .optional()
        .trim()
        .not()
        .isEmpty()
        .withMessage('El apellido no puede quedar vacio.'),

    (req, res, next) => {
        validateResult(req, res, next);
    },
];
