/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');
const { categoryModel } = require('../../models');

const getOneById = async (id) => {
    // id ahora es post identifier, puede ser _id o slug
    const method = mongoose.Types.ObjectId.isValid(id)
        ? categoryModel.findById({ _id: id })
        : categoryModel.findBySlug(id);

    const post = await method.exec();

    return post;
};

module.exports = getOneById;
