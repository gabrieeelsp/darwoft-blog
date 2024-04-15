const { Router } = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const updateHandler = require('../handlers/user/updateHandler');
const validateIdMiddleware = require('../middlewares/validateIdMiddleware');
const validateUpdate = require('../validators/user/update');
const validateUpdateRoles = require('../validators/user/updateRoles');
const updateRolesHandler = require('../handlers/user/updateRolesHandler');

const router = Router();

router.put(
    '/:userId',
    authMiddleware,
    validateIdMiddleware('userId'),
    validateUpdate,
    updateHandler,
);

router.put(
    '/:userId/update-roles',
    authMiddleware,
    validateIdMiddleware('userId'),
    validateUpdateRoles,
    updateRolesHandler,
);

module.exports = router;
