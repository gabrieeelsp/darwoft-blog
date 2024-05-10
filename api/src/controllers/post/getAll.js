const { postModel } = require('../../models');

const getAll = async (filters, modifiers) => {
    const posts = await postModel
        .find(filters, '-content')
        .skip(modifiers.offset)
        .limit(modifiers.limit)
        .populate('author', 'name surname');
    // .populate('category', 'name');

    return posts;
};

module.exports = getAll;
