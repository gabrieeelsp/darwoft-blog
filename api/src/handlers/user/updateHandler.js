const { matchedData } = require('express-validator');
const update = require('../../controllers/user/update');
const haveSomeRole = require('../../utils/haveSomeRole');
const ClientError = require('../../errors/ClientError');
const responseHelper = require('../../helpers/responseHelper');

const updateHandler = async (req, res, next) => {
    const data = matchedData(req);

    const { userId } = req.params;
    const { authUser } = req;

    let allowed = false;
    if (userId === authUser._id.toString()) allowed = true; // permitido modificar mi propio perfil
    if (haveSomeRole(authUser, 'administrador')) allowed = true; // permitido modificar el otro perfil si soy administrador
    if (!allowed)
        return next(
            new ClientError(
                403,
                'No tiene permisos para realizar esta acción.',
            ),
        );

    let user = null;
    try {
        user = await update(userId, data);
    } catch (error) {
        return next(error);
    }

    if (!user) return next(new ClientError(404, 'Usuario no encontrado', null));

    return responseHelper(res, {
        statusCode: 200,
        message: 'Usuario actualizado con éxito',
        data: user,
    });
};

module.exports = updateHandler;
