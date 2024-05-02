const { Router } = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const updateHandler = require('../handlers/user/updateHandler');
const validateUpdate = require('../validators/user/update');
const validateUpdateRoles = require('../validators/user/updateRoles');
const updateRolesHandler = require('../handlers/user/updateRolesHandler');
const validateRolMiddleware = require('../middlewares/validateRolMiddleware');
const getOneByIdHandler = require('../handlers/user/getOneByIdHandler');
const uploadMiddleware = require('../middlewares/uploadMiddleware');
const upload = require('../validators/user/upload');

const router = Router();

router.get('/:userId', getOneByIdHandler);

router.put('/:userId', authMiddleware, validateUpdate, updateHandler);

router.put(
    '/:userId/update-roles',
    authMiddleware,
    validateRolMiddleware(['administrador']),
    validateUpdateRoles,
    updateRolesHandler,
);

router.post(
    '/:userId/upload-image',
    authMiddleware,
    uploadMiddleware.single('file'),
    (req, res, next) => {
        req.body.image = req.file.filename;
        next();
    },
    upload,
    updateHandler,
);

module.exports = router;
