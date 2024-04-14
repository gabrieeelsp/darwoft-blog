/* eslint-disable no-underscore-dangle */
const meHandler = (req, res) => {
    const { authUser } = req;

    const resp = {
        _id: authUser._id,
        name: authUser.name,
        surname: authUser.surname,
        email: authUser.email,
        roles: authUser.roles,
    };

    return res
        .status(200)
        .json({ message: 'Se ha encontrado el usuario.', data: resp });
};

module.exports = meHandler;
