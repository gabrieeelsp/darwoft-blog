const { userModel } = require('../../models');

const getUserProfile = async (id) => {
    const user = await userModel.findById(id).populate({
        path: 'lastPostsViewed',
        populate: {
            path: 'post',
            model: 'Post',
            select: 'title image category slug',
        },
    });

    const resp = {
        lastPostsViewed: user.lastPostsViewed,
    };

    return resp;
};

module.exports = getUserProfile;
