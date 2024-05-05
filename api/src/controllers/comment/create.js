const { commentModel } = require('../../models');

const create = async (data) => {
    const comment = await commentModel.create(data);

    await comment.populate('author');

    return comment;
};

module.exports = create;
