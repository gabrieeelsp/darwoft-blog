const { check } = require('express-validator');
const { validateResult } = require('../../helpers/validateHelper');

module.exports = [
    check('image').exists(),

    (req, res, next) => validateResult(req, res, next),
];
