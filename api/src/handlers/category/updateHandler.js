const { matchedData } = require('express-validator');
const update = require('../../controllers/category/update');
const getErrorDBName = require('../../utils/getErrorDBName');

const updateHandler = async (req, res) => {
    const data = matchedData(req);
    const { categoryId } = req.objectsId;

    try {
        const category = await update(categoryId, data);

        return res.status(203).json({
            message: 'Categoría actualizada con éxito',
            data: category,
        });
    } catch (error) {
        return res.status(500).json({
            error: {
                message: getErrorDBName(error) || error.message,
            },
        });
    }
};

module.exports = updateHandler;
