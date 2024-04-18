const { matchedData } = require('express-validator');
const create = require('../../controllers/post/create');
const getErrorDBName = require('../../utils/getErrorDBName');
const haveSomeRole = require('../../utils/haveSomeRole');

const createHandler = async (req, res) => {
    const data = matchedData(req);

    const { authUser } = req;

    let allowed = false;
    if (haveSomeRole(authUser, ['autor'])) allowed = true;
    if (!allowed)
        return res.status(403).json({
            error: {
                message: 'No tiene permisos para realizar esta acción.',
            },
        });

    data.author = authUser._id;

    try {
        const post = await create(data);
        return res
            .status(203)
            .json({ message: 'Post creado con éxito', data: post });
    } catch (error) {
        return res.status(500).json({
            error: {
                message: getErrorDBName(error) || error.message,
            },
        });
    }
};

module.exports = createHandler;
