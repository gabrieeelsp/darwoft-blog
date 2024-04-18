const { Router } = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const updateHandler = require('../handlers/user/updateHandler');
const validateUpdate = require('../validators/user/update');
const validateUpdateRoles = require('../validators/user/updateRoles');
const updateRolesHandler = require('../handlers/user/updateRolesHandler');
const validateRolMiddleware = require('../middlewares/validateRolMiddleware');

const router = Router();

router.put('/:userId', authMiddleware, validateUpdate, updateHandler);

router.put(
    '/:userId/update-roles',
    authMiddleware,
    validateRolMiddleware(['administrador']),
    validateUpdateRoles,
    updateRolesHandler,
);

module.exports = router;
