const { userModel } = require('../../models');
const { compare } = require('../../services/hashService');
const { generateToken } = require('../../services/jwtService');

const login = async (email, password) => {
    const query = userModel.findOne({ email });
    query.select('name surname email password');

    let user = await query.exec();

    if (!user) throw new Error('Email o Password incorrecto.');

    const isPasswordCorrect = compare(password, user.password);
    if (!isPasswordCorrect) throw new Error('Email o Password incorrecto.');

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
