const { check } = require('express-validator');
const { validateResult } = require('../../helpers/validateHelper');

module.exports = [
    check('postId')
        .isMongoId()
        .withMessage('Existe un error en el campo post id'),

    (req, res, next) => {
        validateResult(req, res, next);
    },
];
