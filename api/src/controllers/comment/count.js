const { commentModel } = require('../../models');

const count = async (filters) => {
    const countDocuments = await commentModel.countDocuments(filters);

    return countDocuments;
};

module.exports = count;
