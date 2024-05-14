const ClientError = require('../../errors/ClientError');
const { userModel } = require('../../models');
const { compare } = require('../../services/hashService');
const { generateToken } = require('../../services/jwtService');
const cleanDocument = require('../../utils/cleanDocument');

const login = async (email, password) => {
    const query = userModel.findOne({ email });
    query.select(
        'name surname email password roles image isEmailVerified isEnable',
    );

    let user = await query.exec();

    if (!user || !compare(password, user.password)) return null;

    if (!user.isEmailVerified)
        throw new ClientError(422, 'Se requiere verificación de cuenta.');

    if (!user.isEnable) throw new ClientError(422, 'Cuenta no habilitada.');

    user = cleanDocument(user, ['password']);

    // eslint-disable-next-line no-underscore-dangle
    const token = generateToken({ id: user._id, createdAt: Date.now() });

    return {
        token,
        user,
    };
};

module.exports = login;
