const { matchedData } = require('express-validator');
const update = require('../../controllers/user/update');
const getErrorDBName = require('../../utils/getErrorDBName');
const haveSomeRole = require('../../utils/haveSomeRole');

const updateRolesHandler = async (req, res) => {
    const data = matchedData(req);
    const { userId } = req.objectsId;

    const { authUser } = req;

    let allowed = false;
    if (userId.toString() === authUser._id.toString()) allowed = true; // permitido modificar mi propio perfil
    if (haveSomeRole(authUser, 'administrador')) allowed = true; // permitido modificar el otro perfil si soy administrador
    if (!allowed)
        return res.status(403).json({
            error: {
                message: 'No tiene permisos para realizar esta acción.',
            },
        });

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

module.exports = updateRolesHandler;
