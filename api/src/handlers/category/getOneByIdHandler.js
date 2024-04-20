const getOneById = require('../../controllers/category/getOneById');
const ClientError = require('../../errors/ClientError');
const responseHelper = require('../../helpers/responseHelper');

const getOneByIdHamdler = async (req, res, next) => {
    const { categoryId } = req.params;
    let post = null;
    try {
        post = await getOneById(categoryId);
    } catch (error) {
        return next(error);
    }

    if (!post)
        return next(new ClientError(404, 'Categoría no encontrada', null));

    return responseHelper(res, {
        statusCode: 200,
        message: 'Categoría encontrada',
        data: post,
    });
};

module.exports = getOneByIdHamdler;
