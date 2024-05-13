const mongoose = require('mongoose');
const { default: slugify } = require('slugify');

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
            default: false,
        },
        excerpt: {
            type: String,
        },
        content: {
            type: String,
        },
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
        slug: {
            type: String,
            unique: true,
        },
        comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
        countVisits: {
            type: Number,
            default: 0,
        },
        countComments: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
        statics: {
            findBySlug(slug) {
                return this.findOne({ slug });
            },
        },
    },
);

PostSchema.pre('save', function (next) {
    this.slug = slugify(this.title, { lower: true });
    next();
});

PostSchema.pre('findOneAndUpdate', function (next) {
    if (this._update.title)
        this._update.slug = slugify(this._update.title, { lower: true });

    next();
});

module.exports = mongoose.model('Post', PostSchema);
