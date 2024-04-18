/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');
const { postModel } = require('../../models');

const getOneById = async (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) return null;

    const post = await postModel
        .findById({ _id: id })
        .populate('author', 'name surname')
        .exec();

    return post;
};

module.exports = getOneById;
