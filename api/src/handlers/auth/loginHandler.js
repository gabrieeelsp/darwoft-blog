const { matchedData } = require('express-validator');
const login = require('../../controllers/user/login');
const responseHelper = require('../../helpers/responseHelper');
const ClientError = require('../../errors/ClientError');

const loginHandler = async (req, res, next) => {
    let user = null;
    try {
        const data = matchedData(req);

        user = await login(data.email, data.password);
    } catch (error) {
        next(error);
    }

    if (!user)
        return next(new ClientError(404, 'Email o Password incorrecto', null));

    return responseHelper(res, {
        statusCode: 200,
        message: 'Login satisfactorio',
        data: user,
    });
};

module.exports = loginHandler;
