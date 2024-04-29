/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');
const { userModel } = require('../../models');

const update = async (id, data) => {
    if (!mongoose.Types.ObjectId.isValid(id)) return null;

    const values = { ...data };

    const unset = {};
    if (data.gender === null) {
        unset.gender = 1;
        delete values.gender;
    }

    const user = await userModel.findByIdAndUpdate(
        { _id: id },
        { ...values, $unset: unset },
        {
            new: true,
        },
    );

    return user;
};

module.exports = update;
