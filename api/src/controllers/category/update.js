/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');
const { categoryModel } = require('../../models');

const update = async (id, data) => {
    if (!mongoose.Types.ObjectId.isValid(id)) return null;

    const resp = await categoryModel.findByIdAndUpdate({ _id: id }, data, {
        new: true,
    });

    return resp;
};

module.exports = update;
