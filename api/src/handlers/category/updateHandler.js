const { matchedData } = require('express-validator');
const update = require('../../controllers/category/update');
const ClientError = require('../../errors/ClientError');
const responseHelper = require('../../helpers/responseHelper');

const updateHandler = async (req, res, next) => {
    const { categoryId } = req.params;

    let category = null;
    try {
        const data = matchedData(req);
        category = await update(categoryId, data);
    } catch (error) {
        return next(error);
    }

    if (!category)
        return next(new ClientError(404, 'Categoría no encontrada', null));

    return responseHelper(res, {
        statusCode: 200,
        message: 'Categoría actualizada con exito',
        data: category,
    });
};

module.exports = updateHandler;
