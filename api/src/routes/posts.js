const { Router } = require('express');
const validateCreate = require('../validators/post/create');
const validateUpdate = require('../validators/post/update');
const authMiddleware = require('../middlewares/authMiddleware');
const createHandler = require('../handlers/post/createHandler');
const getOneByIdHandler = require('../handlers/post/getOneByIdHandler');
const validateRolMiddleware = require('../middlewares/validateRolMiddleware');
const updateHandler = require('../handlers/post/updateHandler');
const getAllHandler = require('../handlers/post/getAllHandler');
const uploadMiddleware = require('../middlewares/uploadMiddleware');
const upload = require('../validators/post/upload');

const router = Router();

router.post(
    '/:postId/upload-image',
    authMiddleware,
    validateRolMiddleware(['autor']),
    uploadMiddleware.single('file'),
    (req, res, next) => {
        req.body.image = req.file.filename;
        next();
    },
    upload,
    updateHandler,
);

router.get('/:postId', getOneByIdHandler);
router.get('/', getAllHandler);

router.post(
    '/',
    authMiddleware,
    validateRolMiddleware(['autor']),
    validateCreate,
    createHandler,
);

router.put(
    '/:postId',
    authMiddleware,
    validateRolMiddleware(['autor']),
    validateUpdate,
    updateHandler,
);

module.exports = router;
