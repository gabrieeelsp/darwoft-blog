const { check } = require('express-validator');
const { validateResult } = require('../../helpers/validateHelper');
const { roles } = require('../../utils/constants');

module.exports = [
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
