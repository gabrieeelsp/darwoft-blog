/* eslint-disable no-underscore-dangle */
const meHandler = (req, res) => {
    const { user: userDoc } = req;

    const user = userDoc.toObject();

    const resp = {
        _id: user._id,
        name: user.name,
        surname: user.surname,
        email: user.email,
    };

    return res
        .status(200)
        .json({ message: 'Se ha encontrado el usuario.', data: resp });
};

module.exports = meHandler;
