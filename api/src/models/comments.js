const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema(
    {
        isVisible: {
            type: Boolean,
        },
        content: {
            type: String,
        },
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Comment', CommentSchema);
