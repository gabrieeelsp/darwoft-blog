/* eslint-disable no-underscore-dangle */
const { userModel } = require('../../models');

const update = async (id, data) => {
    const newData = { ...data };
    if (data.roles) {
        const user = await userModel.findById({ _id: id });
        if (!user) throw new Error('No se encontro el usuario.');

        const { roles: userRoles } = user;

        const newRoles = data.roles.map((newRolrecived) => {
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

        newData.roles = newRoles;
    }

    const user = await userModel.findByIdAndUpdate({ _id: id }, newData, {
        new: true,
    });

    return user;
};

module.exports = update;
