const { postModel } = require('../../models');

const getAll = async (filters, modifiers) => {
    const posts = await postModel
        .find(filters, '-content')
        .sort(modifiers.sort)
        .skip(modifiers.offset)
        .limit(modifiers.limit)
        .populate('author', 'name surname');

    return posts;
};

module.exports = getAll;
