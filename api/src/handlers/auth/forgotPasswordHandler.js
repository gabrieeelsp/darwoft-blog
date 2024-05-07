const { matchedData } = require('express-validator');
const getOneByEmail = require('../../controllers/user/getOneByEmail');
const ClientError = require('../../errors/ClientError');
const responseHelper = require('../../helpers/responseHelper');
const { send, createMessage } = require('../../services/mailerService');
const { generateToken } = require('../../services/jwtService');

const forgotPasswordHandler = async (req, res, next) => {
    try {
        const data = matchedData(req);

        const user = await getOneByEmail(data.email);

        if (!user)
            return next(
                new ClientError(403, 'No se ha encontrado el usuario.'),
            );

        const token = generateToken({ id: user._id, createdAt: Date.now() });
        const message = createMessage('changePassword', {
            token,
            name: user.name,
        });

        await send({
            to: user.email,
            subject: 'Cambio de contraseña',
            message,
        });

        return responseHelper(res, {
            statusCode: 201,
            message: 'Email enviado con exito',
            data: {
                _id: user.id,
                name: user.name,
                surname: user.surname,
                email: user.email,
            },
        });
    } catch (error) {
        next(error);
    }
};

module.exports = forgotPasswordHandler;
