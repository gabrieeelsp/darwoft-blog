const { userModel } = require('../../models');
const { hash } = require('../../services/hashService');
const cleanDocument = require('../../utils/cleanDocument');

const create = async (data) => {
    const user = await userModel.create({
        ...data,
        password: hash(data.password),
    });

    return cleanDocument(user, [
        'password',
        'tokensRevokedAt',
        'createdAt',
        'updatedAt',
    ]);
};

module.exports = create;
