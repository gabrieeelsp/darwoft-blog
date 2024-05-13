const { Router } = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const updateHandler = require('../handlers/user/updateHandler');
const validateUpdate = require('../validators/user/update');
const validateUpdateRoles = require('../validators/user/updateRoles');
const validateAddPostViewed = require('../validators/user/addPostViewed');
const updateRolesHandler = require('../handlers/user/updateRolesHandler');
const validateRolMiddleware = require('../middlewares/validateRolMiddleware');
const getOneByIdHandler = require('../handlers/user/getOneByIdHandler');
const uploadMiddleware = require('../middlewares/uploadMiddleware');
const upload = require('../validators/user/upload');
const getAllHandler = require('../handlers/user/getAllHandler');
const addPostViewedHandler = require('../handlers/user/addPostViewedHandler');
const getProfileInfoHandler = require('../handlers/user/getProfileInfoHandler');

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

router.get('/', getAllHandler);

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

router.post(
    '/:userId/add-post-viewed',
    authMiddleware,
    validateAddPostViewed,
    addPostViewedHandler,
);

router.get('/:userId/profile-info', authMiddleware, getProfileInfoHandler);

module.exports = router;
