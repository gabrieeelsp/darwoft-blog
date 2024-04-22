const slugify = require('slugify');
const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            unique: true,
        },
        isVisible: {
            type: Boolean,
            default: false,
        },
        description: {
            type: String,
        },
        slug: {
            type: String,
        },
    },
    {
        statics: {
            findBySlug(slug) {
                return this.findOne({ slug });
            },
        },
    },
);

CategorySchema.pre('save', function (next) {
    this.slug = slugify(this.name, { lower: true });
    next();
});

CategorySchema.pre('findOneAndUpdate', function (next) {
    if (this._update.name)
        this._update.slug = slugify(this._update.name, { lower: true });

    next();
});

module.exports = mongoose.model('Category', CategorySchema);
