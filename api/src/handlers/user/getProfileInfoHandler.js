const getUserProfile = require('../../controllers/user/getUserProfile');
const ClientError = require('../../errors/ClientError');
const responseHelper = require('../../helpers/responseHelper');

const getProfileInfoHandler = async (req, res, next) => {
    const { authUser } = req;

    let userProfile = null;
    try {
        userProfile = await getUserProfile(authUser._id);
    } catch (error) {
        return next(error);
    }

    if (!userProfile)
        return next(new ClientError(404, 'Usuario no encontrado', null));

    return responseHelper(res, {
        statusCode: 200,
        data: userProfile,
    });
};

module.exports = getProfileInfoHandler;
