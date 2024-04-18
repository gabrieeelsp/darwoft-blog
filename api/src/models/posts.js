const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            unique: true,
        },
        image: {
            type: String,
        },
        publicationAt: {
            type: Date,
        },
        isVisible: {
            type: Boolean,
        },
        content: {
            type: String,
        },
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    },
    { timestamps: true },
);

module.exports = mongoose.model('Post', PostSchema);
