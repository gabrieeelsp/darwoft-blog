const { categoryModel } = require('../../models');

const create = async (data) => {
    const category = await categoryModel.create(data);

    return category;
};

module.exports = create;
