const { matchedData } = require('express-validator');
const create = require('../../controllers/user/create');
const getErrorDBName = require('../../utils/getErrorDBName');

const registerHandler = async (req, res) => {
    const data = matchedData(req);

    try {
        const user = await create(data);
        return res
            .status(203)
            .json({ message: 'Usuario creado con éxito', data: user });
    } catch (error) {
        return res.status(500).json({
            error: {
                message: getErrorDBName(error) || error.message,
            },
        });
    }
};

module.exports = registerHandler;
