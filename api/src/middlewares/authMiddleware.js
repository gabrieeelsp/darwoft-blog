const { userModel } = require('../models');
const { verifyToken } = require('../services/jwtService');

const authMiddleware = async (req, res, next) => {
    let token = req.headers.authorization;

    if (!token)
        return res
            .status(401)
            .json({ error: { message: 'Token no proporcionado.' } });

    token = token.split(' ').pop();

    const resp = verifyToken(token);

    if (!resp.valid) {
        if (resp.error === 'jwt expired')
            return res
                .status(403)
                .json({ error: { message: 'Token caducado' } });
        return res.status(403).json({ error: { message: 'Token inválido' } });
    }

    const query = userModel.findById(resp.payload.id);
    query.select('_id name surname email roles tokensRevokedAt');
    const user = await query.exec();

    if (!user)
        return res.status(401).json({ error: { message: 'Token inválido' } });

    if (resp.payload.createdAt < user.tokensRevokedAt.getTime())
        return res
            .status(401)
            .json({ error: { message: 'Token inválido fecha' } });

    req.authUser = user.toObject();
    delete req.authUser.tokensRevokedAt;

    return next();
};

module.exports = authMiddleware;
