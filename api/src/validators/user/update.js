const { check } = require('express-validator');
const { validateResult } = require('../../helpers/validateHelper');
const { genders } = require('../../utils/constants');

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
    check('gender')
        .optional()
        .isIn([...genders, null])
        .withMessage('El genero no es válido'),
    check('isEnable')
        .optional()
        .isBoolean()
        .withMessage('Existe un error en el campo isEnable'),

    (req, res, next) => {
        validateResult(req, res, next);
    },
];
