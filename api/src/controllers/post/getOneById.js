const { postModel } = require('../../models');

const getOneById = async (id) => {
    const post = await postModel
        .findById({ _id: id })
        .populate('author', 'name surname')
        .exec();

    return post;
};

module.exports = getOneById;
