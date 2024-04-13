const { Router } = require('express');
const validateRegister = require('../validators/user/register');
const registerHandler = require('../handlers/auth/registerHandler');

const router = Router();

router.post('/signup', validateRegister, registerHandler);

module.exports = router;
