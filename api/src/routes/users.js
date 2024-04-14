const { Router } = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const updateHandler = require('../handlers/user/updateHandler');
const validateIdMiddleware = require('../middlewares/validateIdMiddleware');
const validateUpdate = require('../validators/user/update');

const router = Router();

router.put(
    '/:userId',
    authMiddleware,
    validateIdMiddleware('userId'),
    validateUpdate,
    updateHandler,
);

module.exports = router;
