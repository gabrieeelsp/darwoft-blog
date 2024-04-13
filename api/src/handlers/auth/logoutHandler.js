/* eslint-disable no-unused-vars */
const logout = require('../../controllers/user/logout');

const logoutHandler = async (req, res) => {
    const { _id } = req.user;
    console.log(_id);
    try {
        await logout(_id);
        return res.status(200).json({
            message: 'Logout satisfactorio',
        });
    } catch (error) {
        return res.status(500).json({
            error: {
                message: 'Se ha producido un error',
            },
        });
    }
};

module.exports = logoutHandler;
