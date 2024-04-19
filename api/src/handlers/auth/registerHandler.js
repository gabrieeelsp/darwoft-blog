const { matchedData } = require('express-validator');
const create = require('../../controllers/user/create');
const responseHelper = require('../../helpers/responseHelper');

const registerHandler = async (req, res, next) => {
    try {
        const data = matchedData(req);
        const user = await create(data);
        return responseHelper(res, {
            statusCode: 201,
            message: 'Usuario creado con exito',
            data: user,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = registerHandler;
