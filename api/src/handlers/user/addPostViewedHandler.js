const { matchedData } = require('express-validator');
const update = require('../../controllers/user/update');
const ClientError = require('../../errors/ClientError');
const responseHelper = require('../../helpers/responseHelper');
const addPostViewed = require('../../controllers/user/addPostViewed');

const addPostViewedHandler = async (req, res, next) => {
    const { userId } = req.params;

    let user = null;
    try {
        const data = matchedData(req);

        user = await addPostViewed(userId, data.postId);
    } catch (error) {
        return next(error);
    }

    if (!user) return next(new ClientError(404, 'Usuario no encontrado', null));

    return responseHelper(res, {
        statusCode: 200,
        message: 'Usuario actualizado con éxito',
        data: {
            user,
        },
    });
};

module.exports = addPostViewedHandler;
