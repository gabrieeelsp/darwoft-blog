const { commentModel, postModel } = require('../../models');

const create = async (data) => {
    const comment = await commentModel.create(data);

    await comment.populate('author');

    const post = await postModel.findById(data.post);
    if (!post.countComments) post.countComments = 0;
    post.countComments += 1;
    await post.save();

    return comment;
};

module.exports = create;
