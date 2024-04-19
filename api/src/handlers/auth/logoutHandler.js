/* eslint-disable no-unused-vars */
const logout = require('../../controllers/user/logout');
const responseHelper = require('../../helpers/responseHelper');

const logoutHandler = async (req, res, next) => {
    const { authUser } = req;

    try {
        await logout(authUser._id);
        return responseHelper(res, {
            statusCode: 200,
            message: 'Logout satisfactorio',
        });
    } catch (error) {
        next(error);
    }
};

module.exports = logoutHandler;
