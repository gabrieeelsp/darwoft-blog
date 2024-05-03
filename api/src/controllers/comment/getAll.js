const { commentModel } = require('../../models');

const getAll = async (filters, modifiers) => {
    const comments = await commentModel
        .find(filters)
        .sort({ createdAt: -1 })
        .skip(modifiers.offset)
        .limit(modifiers.limit);

    return comments;
};

module.exports = getAll;
