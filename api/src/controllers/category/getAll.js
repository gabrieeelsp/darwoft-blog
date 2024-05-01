const { categoryModel } = require('../../models');

const getAll = async (filters, modifiers) => {
    const categories = await categoryModel
        .find(filters)
        .skip(modifiers.offset)
        .limit(modifiers.limit);

    return categories;
};

module.exports = getAll;
