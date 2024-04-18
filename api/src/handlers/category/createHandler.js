const { matchedData } = require('express-validator');
const create = require('../../controllers/category/create');
const responseHelper = require('../../helpers/responseHelper');

const createHandler = async (req, res, next) => {
    const data = matchedData(req);

    try {
        const category = await create(data);

        return responseHelper(res, {
            statusCode: 201,
            message: 'Categoría creada con exito',
            data: category,
        });
    } catch (error) {
        return next(error);
    }
};

module.exports = createHandler;
