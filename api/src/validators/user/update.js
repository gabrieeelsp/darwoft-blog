const { check } = require('express-validator');
const { validateResult } = require('../../helpers/validateHelper');
const { roles } = require('../../utils/constantes');

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
    check('roles').optional(),
    check('roles.*.name')
        .exists()
        .withMessage('El nombre del rol es obligatorio.')
        .trim()
        .isIn(roles)
        .withMessage('Error de nombre de Rol'),
    check('roles.*.isEnable')
        .exists()
        .withMessage('El atributo isEnable es obligatorio.')
        .isBoolean()
        .withMessage('El atributo isEnable debe ser Booleano'),

    (req, res, next) => {
        validateResult(req, res, next);
    },
];
