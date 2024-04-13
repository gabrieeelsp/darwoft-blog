const { Router } = require('express');
const validateRegister = require('../validators/user/register');
const validateLogin = require('../validators/user/login');
const registerHandler = require('../handlers/auth/registerHandler');
const loginHandler = require('../handlers/auth/loginHandler');

const router = Router();

router.post('/signup', validateRegister, registerHandler);
router.post('/signin', validateLogin, loginHandler);

module.exports = router;
