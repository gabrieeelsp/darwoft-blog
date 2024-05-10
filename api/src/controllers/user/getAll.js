const { userModel } = require('../../models');

const getAll = async (filters, modifiers) => {
    const posts = await userModel
        .find(filters, ['-password', '-tokensRevokedAt'])
        .skip(modifiers.offset)
        .limit(modifiers.limit);

    return posts;
};

module.exports = getAll;
