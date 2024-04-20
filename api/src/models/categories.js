const slugify = require('slugify');
const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
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
});

CategorySchema.pre(
    ['updateOne', 'findOneAndUpdate', 'findByIdAndUpdate'],
    function (next) {
        this._update.slug = slugify(this._update.name, { lower: true });
        next();
    },
);
CategorySchema.pre('save', function (next) {
    // if (this.isModified('name')) {
    //     this.slug = slugify(this.name, { lower: true });
    // }
    // this.slug = slugify(this.name, { lower: true });
    this.slug = 'slug';
    next();
});

module.exports = mongoose.model('Category', CategorySchema);
