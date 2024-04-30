const { matchedData } = require('express-validator');
const update = require('../../controllers/post/update');
const ClientError = require('../../errors/ClientError');
const responseHelper = require('../../helpers/responseHelper');
const getOneById = require('../../controllers/post/getOneById');

const updateHandler = async (req, res, next) => {
    const { postId } = req.params;
    const { authUser } = req;

    const p = await getOneById(postId);

    if (!p) return next(new ClientError(404, 'Post no encontrado', null));

    if (p.author._id.toString() !== authUser._id.toString())
        return next(
            new ClientError(
                403,
                'No tiene permisos para realizar esta acción.',
            ),
        );

    let post = null;
    try {
        const data = matchedData(req);
        if (data['category-id']) {
            data.category = data['category-id'];
            delete data['category-id'];
        }

        post = await update(postId, data);
    } catch (error) {
        return next(error);
    }

    if (!post) return next(new ClientError(404, 'Post no encontrado', null));

    return responseHelper(res, {
        statusCode: 200,
        message: 'Post actualizado con exito',
        data: post,
    });
};

module.exports = updateHandler;
