const ClientError = require('../errors/ClientError');
const { userModel } = require('../models');
const { verifyToken } = require('../services/jwtService');

const authMiddleware = async (req, res, next) => {
    let token = req.headers.authorization;

    if (!token) return next(new ClientError(401, 'Token no proporcionado.'));

    token = token.split(' ').pop();

    const resp = verifyToken(token);

    if (!resp.valid) {
        if (resp.error === 'jwt expired')
            return next(new ClientError(403, 'Token caducado.'));

        return next(new ClientError(403, 'Token inválido.'));
    }

    const query = userModel.findById(resp.payload.id);
    query.select('_id name surname email roles tokensRevokedAt');
    const user = await query.exec();

    if (!user) return next(new ClientError(403, 'Token inválido.'));

    if (resp.payload.createdAt < user.tokensRevokedAt.getTime())
        return next(new ClientError(403, 'Token inválido.'));

    req.authUser = user.toObject();
    delete req.authUser.tokensRevokedAt;

    return next();
};

module.exports = authMiddleware;
