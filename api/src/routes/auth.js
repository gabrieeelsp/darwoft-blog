const { Router } = require('express');
const validateRegister = require('../validators/user/register');
const validateLogin = require('../validators/user/login');
const authMiddleware = require('../middlewares/authMiddleware');
const registerHandler = require('../handlers/auth/registerHandler');
const loginHandler = require('../handlers/auth/loginHandler');
const logoutHandler = require('../handlers/auth/logoutHandler');

const router = Router();

router.post('/signup', validateRegister, registerHandler);
router.post('/signin', validateLogin, loginHandler);
router.post('/signout', authMiddleware, logoutHandler);

module.exports = router;
