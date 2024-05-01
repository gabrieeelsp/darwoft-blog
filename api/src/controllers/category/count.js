const { categoryModel } = require('../../models');

const count = async (filters) => {
    const countDocuments = await categoryModel.countDocuments(filters);

    return countDocuments;
};

module.exports = count;
