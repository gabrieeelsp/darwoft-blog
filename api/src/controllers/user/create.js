const { userModel } = require('../../models');
const { hash } = require('../../services/hashService');

const create = async (data) => {
    let user = await userModel.create({
        ...data,
        password: hash(data.password),
    });

    user = user.toObject(); // toma un documento y devuelve un objeto javascript
    delete user.password;
    return user;
};

module.exports = create;
