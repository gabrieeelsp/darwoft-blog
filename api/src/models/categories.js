const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
    },
    isVisible: {
        type: Boolean,
    },
    description: {
        type: String,
    },
});

module.exports = mongoose.model('Category', CategorySchema);
