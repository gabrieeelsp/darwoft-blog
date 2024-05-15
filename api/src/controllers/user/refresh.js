/* eslint-disable no-underscore-dangle */
const { userModel } = require('../../models');

const { verifyToken, generateToken } = require('../../services/jwtService');

const refresh = async (token) => {
    const resp = verifyToken(token);

    if (resp.valid) return token;

    if (resp.error === 'jwt expired') {
        const response = verifyToken(token, true);

        const query = userModel.findById(response.payload.id);
        query.select('tokensRevokedAt');

        let user = await query.exec();

        if (!user) throw new Error('Token inválido user');

        user = user.toObject();

        if (response.payload.createdAt < user.tokensRevokedAt.getTime())
            // verifico que no se haya caducado por tokensRevokedAt
            throw new Error('Token inválido time');

        const newToken = generateToken({
            id: user._id,
            createdAt: Date.now(),
        });

        return newToken;
    }

    throw new Error('Token inválido otro');
};

module.exports = refresh;
