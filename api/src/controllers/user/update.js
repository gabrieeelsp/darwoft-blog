/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');
const { userModel } = require('../../models');

const update = async (id, data) => {
    if (!mongoose.Types.ObjectId.isValid(id)) return null;

    const user = await userModel.findByIdAndUpdate({ _id: id }, data, {
        new: true,
    });

    return user;
};

module.exports = update;
