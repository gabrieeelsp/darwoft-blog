const responseHelper = require('../../helpers/responseHelper');

/* eslint-disable no-underscore-dangle */
const meHandler = (req, res) => {
    const { authUser } = req;

    const data = {
        _id: authUser._id,
        name: authUser.name,
        surname: authUser.surname,
        email: authUser.email,
        roles: authUser.roles,
    };

    return responseHelper(res, {
        statusCode: 200,
        message: 'Se ha encontrado el usuario.',
        data,
    });
};

module.exports = meHandler;
