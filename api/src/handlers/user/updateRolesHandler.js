const { matchedData } = require('express-validator');
const updateRoles = require('../../controllers/user/updateRoles');
const ClientError = require('../../errors/ClientError');
const responseHelper = require('../../helpers/responseHelper');

const updateRolesHandler = async (req, res, next) => {
    const { userId } = req.params;

    let user = null;
    try {
        const data = matchedData(req);

        user = await updateRoles(userId, data.roles);
    } catch (error) {
        next(error);
    }

    if (!user) return next(new ClientError(404, 'Usuario no encontrado', null));

    return responseHelper(res, {
        statusCode: 200,
        message: 'Usuario actualizado con éxito',
        data: user,
    });
};

module.exports = updateRolesHandler;
