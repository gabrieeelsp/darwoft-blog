const getAll = require('../../controllers/category/getAll');
const responseHelper = require('../../helpers/responseHelper');
const { genders, roles } = require('../../utils/constants');

const getInitHandler = async (req, res, next) => {
    try {
        const categories = await getAll({}, {});

        return responseHelper(res, {
            statusCode: 200,
            data: {
                genders,
                roles,
                categories,
            },
        });
    } catch (error) {
        return next(error);
    }
};

module.exports = getInitHandler;
