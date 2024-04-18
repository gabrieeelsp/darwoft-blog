const { userModel } = require('../../models');
const { compare } = require('../../services/hashService');
const { generateToken } = require('../../services/jwtService');

const login = async (email, password) => {
    const query = userModel.findOne({ email });
    query.select('name surname email password roles');

    let user = await query.exec();

    if (!user) return null;

    if (!compare(password, user.password)) return null;

    user = user.toObject();
    delete user.password;
    delete user.tokensRevokedAt;

    // eslint-disable-next-line no-underscore-dangle
    const token = generateToken({ id: user._id, createdAt: Date.now() });

    return {
        token,
        user,
    };
};

module.exports = login;
