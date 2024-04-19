const { userModel } = require('../../models');
const { compare } = require('../../services/hashService');
const { generateToken } = require('../../services/jwtService');
const cleanDocument = require('../../utils/cleanDocument');

const login = async (email, password) => {
    const query = userModel.findOne({ email });
    query.select('name surname email password roles');

    let user = await query.exec();

    if (!user || !compare(password, user.password)) return null;

    user = cleanDocument(user, ['password']);

    // eslint-disable-next-line no-underscore-dangle
    const token = generateToken({ id: user._id, createdAt: Date.now() });

    return {
        token,
        user,
    };
};

module.exports = login;
