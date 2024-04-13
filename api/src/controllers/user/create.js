const { userModel } = require('../../models');
const { hash } = require('../../services/hashService');

const create = async (data) => {
    let user = await userModel.create({
        ...data,
        password: hash(data.password),
    });

    user = user.toObject(); // toma un documento y devuelve un objeto javascript
    delete user.password;
    delete user.tokensRevokedAt;
    delete user.createdAt;
    delete user.updatedAt;

    return user;
};

module.exports = create;
