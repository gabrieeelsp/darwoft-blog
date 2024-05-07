const { userModel } = require('../../models');

const getOneByEmail = async (email) => {
    const user = await userModel
        .findOne({ email })
        .select('name surname email')
        .exec();

    return user;
};

module.exports = getOneByEmail;
