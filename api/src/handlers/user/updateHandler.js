const { matchedData } = require('express-validator');
const update = require('../../controllers/user/update');
const getErrorDBName = require('../../utils/getErrorDBName');

const updateHandler = async (req, res) => {
    const data = matchedData(req);

    const { userId } = req.objectsId;
    try {
        const user = await update(userId, data);
        return res
            .status(203)
            .json({ message: 'Usuario actualizado con éxito', data: user });
    } catch (error) {
        return res.status(400).json({
            error: {
                message: getErrorDBName(error) || error.message,
            },
        });
    }
};

module.exports = updateHandler;
