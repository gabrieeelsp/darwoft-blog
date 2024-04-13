const bcryptjs = require('bcryptjs');

const salt = 10;

const hash = (password) => {
    return bcryptjs.hashSync(password, salt);
};

const compare = (password, hashPassword) => {
    const resp = bcryptjs.compareSync(password, hashPassword);
    return resp;
};

module.exports = {
    hash,
    compare,
};
