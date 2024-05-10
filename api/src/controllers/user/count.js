const { userModel } = require('../../models');

const count = async (filters) => {
    const countDocuments = await userModel.countDocuments(filters);

    return countDocuments;
};

module.exports = count;
