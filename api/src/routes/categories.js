const { Router } = require('express');
const validateCreate = require('../validators/category/create');
const authMiddleware = require('../middlewares/authMiddleware');
const createHandler = require('../handlers/category/createHandler');
const validateRolMiddleware = require('../middlewares/validateRolMiddleware');
const updateHandler = require('../handlers/category/updateHandler');
const validateIdMiddleware = require('../middlewares/validateIdMiddleware');

const router = Router();

router.post(
    '/',
    authMiddleware,
    validateRolMiddleware(['administrador']),
    validateCreate,
    createHandler,
);
router.put(
    '/:categoryId',
    authMiddleware,
    validateRolMiddleware(['administrador']),
    validateIdMiddleware('categoryId'),
    validateCreate,
    updateHandler,
);

module.exports = router;
