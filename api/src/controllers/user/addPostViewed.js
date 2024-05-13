/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');
const { userModel } = require('../../models');
const cleanDocument = require('../../utils/cleanDocument');

const addPostViewed = async (id, postId) => {
    if (!mongoose.Types.ObjectId.isValid(id)) return null;

    let user = await userModel.findById(id);

    if (!user.lastPostsViewed) user.lastPostsViewed = [];

    const postViewed = user.lastPostsViewed.find(
        (postviewed) => postviewed.post.toString() === postId,
    );

    if (!postViewed) {
        if (user.lastPostsViewed.length === 5) user.lastPostsViewed.pop();
        user.lastPostsViewed.unshift({ post: postId });
        await user.save();
    }

    user = cleanDocument(user, ['password']);
    return user;
};

module.exports = addPostViewed;
