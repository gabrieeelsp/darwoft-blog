const { matchedData } = require('express-validator');
const ClientError = require('../../errors/ClientError');
const { verifyToken } = require('../../services/jwtService');
const update = require('../../controllers/user/update');
const responseHelper = require('../../helpers/responseHelper');

const changePasswordHandler = async (req, res, next) => {
    try {
        const { token, password } = matchedData(req);

        const resp = verifyToken(token);
        if (!resp.valid) return next(new ClientError(403, 'Token inválido.'));

        const user = await update(resp.payload.id, { password });

        return responseHelper(res, {
            statusCode: 201,
            message: 'Contraseña cambiada con exito',
            data: {
                _id: user.id,
                name: user.name,
                surname: user.surname,
            },
        });
    } catch (error) {
        next(error);
    }
};

module.exports = changePasswordHandler;
