const { matchedData } = require('express-validator');
const { verifyToken } = require('../../services/jwtService');
const ClientError = require('../../errors/ClientError');
const update = require('../../controllers/user/update');
const responseHelper = require('../../helpers/responseHelper');

const verfyAccountHandler = async (req, res, next) => {
    try {
        const data = matchedData(req);
        const resp = verifyToken(data.token);

        if (!resp.valid) return next(new ClientError(403, 'Token inválido.'));

        const user = await update(resp.payload.id, { isEmailVerified: true });

        if (!user) return next(new ClientError(403, 'Token inválido.'));

        return responseHelper(res, {
            statusCode: 201,
            message: 'Email verificado con exito',
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

module.exports = verfyAccountHandler;
