const { postModel } = require('../../models');

const create = async (data) => {
    let post = await postModel.create(data);
    post = await post.populate('category');

    return post;
};

module.exports = create;
