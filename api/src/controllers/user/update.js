/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');
const { userModel } = require('../../models');
const cleanDocument = require('../../utils/cleanDocument');

const update = async (id, data) => {
    if (!mongoose.Types.ObjectId.isValid(id)) return null;

    const values = { ...data };

    const unset = {};
    if (data.gender === null) {
        unset.gender = 1;
        delete values.gender;
    }

    let user = await userModel.findByIdAndUpdate(
        { _id: id },
        { ...values, $unset: unset },
        {
            new: true,
        },
    );

    user = cleanDocument(user, ['password']);

    return user;
};

module.exports = update;
