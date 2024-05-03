const { matchedData } = require('express-validator');
const create = require('../../controllers/comment/create');
const responseHelper = require('../../helpers/responseHelper');

const createHandler = async (req, res, next) => {
    const { authUser } = req;

    try {
        const data = matchedData(req);
        data.author = authUser._id;
        data.post = data['post-id'];
        delete data['post-id'];

        const post = await create(data);
        return responseHelper(res, {
            statusCode: 201,
            message: 'Comntario creado con exito',
            data: post,
        });
    } catch (error) {
        return next(error);
    }
};

module.exports = createHandler;
