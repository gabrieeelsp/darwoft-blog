const { matchedData } = require('express-validator');
const create = require('../../controllers/category/create');
const getErrorDBName = require('../../utils/getErrorDBName');

const createHandler = async (req, res) => {
    const data = matchedData(req);

    try {
        const category = await create(data);

        return res
            .status(203)
            .json({ message: 'Categoría creada con éxito', data: category });
    } catch (error) {
        return res.status(500).json({
            error: {
                message: getErrorDBName(error) || error.message,
            },
        });
    }
};

module.exports = createHandler;
