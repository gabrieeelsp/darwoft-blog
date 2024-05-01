const getOneById = require('../../controllers/post/getOneById');
const ClientError = require('../../errors/ClientError');
const responseHelper = require('../../helpers/responseHelper');

const getOneByIdHandler = async (req, res, next) => {
    const { postId } = req.params;
    let post = null;
    try {
        post = await getOneById(postId);
    } catch (error) {
        return next(error);
    }

    if (!post) return next(new ClientError(404, 'Post no encontrado', null));

    return responseHelper(res, {
        statusCode: 200,
        message: 'Post encontrado',
        data: post,
    });
};

module.exports = getOneByIdHandler;
