const { Router } = require('express');
const appRouter = require('./app');
const authRouter = require('./auth');
const usersRouter = require('./users');
const postsRouter = require('./posts');
const categoriesRouter = require('./categories');
const commentsRouter = require('./comments');

const router = Router();

router.use('/app', appRouter);
router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use('/posts', postsRouter);
router.use('/categories', categoriesRouter);
router.use('/comments', commentsRouter);

module.exports = router;
