/* eslint-disable no-prototype-builtins */
/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');
const { postModel } = require('../../models');

const getOneById = async (id, filters) => {
    console.log(filters);

    const property = mongoose.Types.ObjectId.isValid(id) ? '_id' : 'slug';

    // id ahora es post identifier, puede ser _id o slug
    // const method = mongoose.Types.ObjectId.isValid(id)
    //     ? postModel.findOne({ _id: id, isVisible: false })
    //     : postModel.findBySlug(id);

    const post = await postModel
        .findOne({ ...filters, [property]: id })
        .populate('author', 'name surname image')
        .populate('category', 'name')
        .exec();

    return post;
};

module.exports = getOneById;
