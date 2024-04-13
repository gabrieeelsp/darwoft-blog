const { userModel } = require('../../models');

const logout = async (id) => {
    const user = await userModel.findByIdAndUpdate(
        { _id: id },
        { tokensRevokedAt: Date.now() },
    );

    return user;
};

module.exports = logout;
