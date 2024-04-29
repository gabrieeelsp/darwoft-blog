const { Router } = require('express');
const validateCreate = require('../validators/post/create');
const validateUpdate = require('../validators/post/update');
const authMiddleware = require('../middlewares/authMiddleware');
const createHandler = require('../handlers/post/createHandler');
const getOneByIdHandler = require('../handlers/post/getOneByIdHandler');
const validateRolMiddleware = require('../middlewares/validateRolMiddleware');
const updateHandler = require('../handlers/post/updateHandler');

const router = Router();

router.get('/:postId', getOneByIdHandler);

router.post(
    '/',
    authMiddleware,
    validateRolMiddleware(['autor']),
    validateCreate,
    createHandler,
);

router.put(
    '/:postId',
    authMiddleware, // authentication
    validateRolMiddleware(['autor']), // authorization
    validateUpdate, // valida el formulario
    updateHandler,
);

module.exports = router;
