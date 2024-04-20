const { Router } = require('express');
const validateCreate = require('../validators/category/create');
const authMiddleware = require('../middlewares/authMiddleware');
const createHandler = require('../handlers/category/createHandler');
const validateRolMiddleware = require('../middlewares/validateRolMiddleware');
const updateHandler = require('../handlers/category/updateHandler');
const getOneByIdHamdler = require('../handlers/category/getOneByIdHandler');

const router = Router();

router.get('/:categoryId', getOneByIdHamdler);

router.post(
    '/',
    authMiddleware,
    validateRolMiddleware(['administrador']),
    validateCreate,
    createHandler,
);
router.put(
    '/:categoryId',
    authMiddleware, // authentication
    validateRolMiddleware(['administrador']), // authorization
    validateCreate, // valida el formulario
    updateHandler,
);

module.exports = router;
