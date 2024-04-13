const bcryptjs = require('bcryptjs');

const salt = 10;

const hash = (password) => {
    return bcryptjs.hashSync(password, salt);
};

module.exports = {
    hash,
};
