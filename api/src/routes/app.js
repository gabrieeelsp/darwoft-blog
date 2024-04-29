const { Router } = require('express');
const getInitHandler = require('../handlers/app/getInitHandler');

const router = Router();

router.get('/', getInitHandler);

module.exports = router;
