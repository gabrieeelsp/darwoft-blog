const { check } = require('express-validator');
const { validateResult } = require('../../helpers/validateHelper');

module.exports = [
    check('name')
        .exists()
        .withMessage('El nombre es obligatorio.')
        .trim()
        .not()
        .isEmpty()
        .withMessage('El nombre no puede quedar vacio.'),
    check('surname')
        .exists()
        .withMessage('El apellido es obligatorio.')
        .trim()
        .not()
        .isEmpty()
        .withMessage('El apellido no puede quedar vacio.'),
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
        .withMessage('El password no puede quedar vacío.')
        .withMessage(''),
    check('password-confirmation')
        .exists()
        .withMessage('El password-confirmation es obligatorio.')
        .trim()
        .not()
        .isEmpty()
        .withMessage('El password-confirmation no puede quedar vacío.')
        .custom((value, { req }) => {
            if (value !== req.body.password)
                throw new Error('Las passwords no coinciden');
            return true;
        }),

    (req, res, next) => {
        validateResult(req, res, next);
    },
];
