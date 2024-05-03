const { Router } = require('express');
const validateCreate = require('../validators/comment/create');

const authMiddleware = require('../middlewares/authMiddleware');
const createHandler = require('../handlers/comment/createHandler');
const getAllHandler = require('../handlers/comment/getAllHandler');

const router = Router();

router.get('/', getAllHandler);

router.post('/', authMiddleware, validateCreate, createHandler);

module.exports = router;
