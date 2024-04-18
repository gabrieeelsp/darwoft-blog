const { Router } = require('express');
const authRouter = require('./auth');
const usersRouter = require('./users');
const postsRouter = require('./posts');
const categoriesRouter = require('./categories');

const router = Router();

router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use('/posts', postsRouter);
router.use('/categories', categoriesRouter);

module.exports = router;
