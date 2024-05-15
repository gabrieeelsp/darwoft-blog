/* eslint-disable no-prototype-builtins */
/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');
const { postModel } = require('../../models');

const getOneById = async (id, filters) => {
    const property = mongoose.Types.ObjectId.isValid(id) ? '_id' : 'slug';

    const post = await postModel
        .findOne({ ...filters, [property]: id })
        .populate('author', 'name surname image')
        // .populate('category', 'name')
        .exec();

    if (post && property === 'slug') {
        if (!post.countVisits) post.countVisits = 0;
        post.countVisits += 1;
        post.save();
    }

    return post;
};

module.exports = getOneById;
