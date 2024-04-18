const { Router } = require('express');
const validateCreate = require('../validators/post/create');
const authMiddleware = require('../middlewares/authMiddleware');
const createHandler = require('../handlers/post/createHandler');
const validateIdMiddleware = require('../middlewares/validateIdMiddleware');
const getOneByIdHamdler = require('../handlers/post/getOneByIdHandler');

const router = Router();

router.get('/:postId', validateIdMiddleware('postId'), getOneByIdHamdler);
router.post('/', authMiddleware, validateCreate, createHandler);

module.exports = router;
