const { userModel } = require('../../models');

const logout = async (id) => {
    await userModel.findByIdAndUpdate(
        { _id: id },
        { tokensRevokedAt: Date.now() },
    );
};

module.exports = logout;
