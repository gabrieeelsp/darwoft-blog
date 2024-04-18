const { categoryModel } = require('../../models');

const update = async (id, data) => {
    const resp = await categoryModel.findByIdAndUpdate({ _id: id }, data, {
        new: true,
    });

    return resp;
};

module.exports = update;
