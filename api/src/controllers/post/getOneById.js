/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');
const { postModel } = require('../../models');

const getOneById = async (id) => {
    // id ahora es post identifier, puede ser _id o slug
    const method = mongoose.Types.ObjectId.isValid(id)
        ? postModel.findById({ _id: id })
        : postModel.findBySlug(id);

    const post = await method
        .populate('author', 'name surname image')
        .populate({
            path: 'comments',
        })
        .exec();

    return post;
};

module.exports = getOneById;
