/* eslint-disable no-underscore-dangle */
const { userModel } = require('../../models');

const update = async (id, data) => {
    const newData = { ...data };
    if (data.roles) {
        const user = await userModel.findById({ _id: id });
        if (!user) throw new Error('No se encontro el usuario.');
    }

    const user = await userModel.findByIdAndUpdate({ _id: id }, newData, {
        new: true,
    });

    return user;
};

module.exports = update;
