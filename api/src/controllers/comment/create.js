const { commentModel } = require('../../models');

const create = async (data) => {
    const comment = await commentModel.create(data);

    return comment;
};

module.exports = create;
