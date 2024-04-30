const { postModel } = require('../../models');

const count = async (filters) => {
    const countDocuments = await postModel.countDocuments(filters);

    return countDocuments;
};

module.exports = count;
