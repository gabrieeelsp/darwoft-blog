const { matchedData } = require('express-validator');
const getErrorDBName = require('../../utils/getErrorDBName');
const haveSomeRole = require('../../utils/haveSomeRole');
const updateRoles = require('../../controllers/user/updateRoles');

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
        const user = await updateRoles(userId, data.roles);
        return res
            .status(203)
            .json({ message: 'Usuario actualizado con éxito', data: user });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            error: {
                message: getErrorDBName(error) || error.message,
            },
        });
    }
};

module.exports = updateRolesHandler;
