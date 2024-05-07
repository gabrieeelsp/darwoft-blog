/* eslint-disable no-underscore-dangle */
const { matchedData } = require('express-validator');
const create = require('../../controllers/user/create');
const responseHelper = require('../../helpers/responseHelper');
const { send, createMessage } = require('../../services/mailerService');
const { generateToken } = require('../../services/jwtService');

const registerHandler = async (req, res, next) => {
    try {
        const data = matchedData(req);
        const user = await create(data);

        const token = generateToken({ id: user._id, createdAt: Date.now() });
        const message = createMessage('emailValidation', {
            token,
            name: user.name,
        });

        await send({
            to: user.email,
            subject: 'Validacion de Email',
            message,
        });

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
