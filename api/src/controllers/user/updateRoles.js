/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');
const { userModel } = require('../../models');

const updateRoles = async (id, oldRoles) => {
    if (!mongoose.Types.ObjectId.isValid(id)) return null;

    const user = await userModel.findById({ _id: id });
    if (!user) return null;

    const { roles: userRoles } = user;

    const newRoles = oldRoles.map((newRolrecived) => {
        // newRol: {name: 'editor', isEnable: true}
        const oldRol = userRoles.find(
            (userRol) => userRol.name === newRolrecived.name,
        );

        if (oldRol) {
            oldRol.isEnable = newRolrecived.isEnable;
            return oldRol;
        }
        return {
            name: newRolrecived.name,
            createdAt: Date.now(),
            isEnable: newRolrecived.isEnable,
        };
    });
    const userUpdated = await userModel.findByIdAndUpdate(
        { _id: id },
        { roles: newRoles },
        {
            new: true,
        },
    );

    return userUpdated;
};

module.exports = updateRoles;
