const getOneById = require('../../controllers/user/getOneById');
const ClientError = require('../../errors/ClientError');
const responseHelper = require('../../helpers/responseHelper');

const getOneByIdHandler = async (req, res, next) => {
    const { userId } = req.params;
    let user = null;
    try {
        user = await getOneById(userId);
    } catch (error) {
        return next(error);
    }

    if (!user) return next(new ClientError(404, 'Usuario no encontrado', null));

    return responseHelper(res, {
        statusCode: 200,
        message: 'Usuario encontrado',
        data: {
            user,
        },
    });
};

module.exports = getOneByIdHandler;
