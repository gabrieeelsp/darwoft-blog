const { userModel } = require('../../models');

const getOneById = async (id) => {
    const user = await userModel
        .findById({ _id: id })
        .select('name surname email gender')
        .exec();

    return user;
};

module.exports = getOneById;
