const { Router } = require('express');
const validateRegister = require('../validators/auth/register');
const validateLogin = require('../validators/auth/login');
const authMiddleware = require('../middlewares/authMiddleware');
const registerHandler = require('../handlers/auth/registerHandler');
const loginHandler = require('../handlers/auth/loginHandler');
const logoutHandler = require('../handlers/auth/logoutHandler');
const meHandler = require('../handlers/auth/meHandler');
const verfyAccountHandler = require('../handlers/auth/verfyAccountHandler');
const verifyAccount = require('../validators/auth/verifyAccount');
const forgotPasswordHandler = require('../handlers/auth/forgotPasswordHandler');
const forgotPassword = require('../validators/auth/forgotPassword');
const changePasswordHandler = require('../handlers/auth/changePasswordHandler');
const changePassword = require('../validators/auth/changePassword');
// const refreshHandler = require('../handlers/auth/refreshHandler');

const router = Router();

router.post('/signup', validateRegister, registerHandler);
router.post('/signin', validateLogin, loginHandler);
router.post('/signout', authMiddleware, logoutHandler);
router.get('/me', authMiddleware, meHandler);
router.post('/verify-account', verifyAccount, verfyAccountHandler);
router.post('/forgot-password', forgotPassword, forgotPasswordHandler);
router.post('/change-password', changePassword, changePasswordHandler);
// router.post('/refresh', refreshHandler);

module.exports = router;
