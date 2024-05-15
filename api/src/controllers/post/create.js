const { postModel } = require('../../models');

const create = async (data) => {
    const post = await postModel.create(data);

    return post;
};

module.exports = create;
