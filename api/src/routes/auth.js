const { Router } = require('express');
const validateRegister = require('../validators/user/register');
const validateLogin = require('../validators/user/login');
const authMiddleware = require('../middlewares/authMiddleware');
const registerHandler = require('../handlers/auth/registerHandler');
const loginHandler = require('../handlers/auth/loginHandler');
const logoutHandler = require('../handlers/auth/logoutHandler');
const meHandler = require('../handlers/auth/meHandler');
const refreshHandler = require('../handlers/auth/refreshHandler');

const router = Router();

router.post('/signup', validateRegister, registerHandler);
router.post('/signin', validateLogin, loginHandler);
router.post('/signout', authMiddleware, logoutHandler);
router.get('/me', authMiddleware, meHandler);
router.post('/refresh', refreshHandler);

module.exports = router;
