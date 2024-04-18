const ClientError = require('../errors/ClientError');
const haveSomeRole = require('../utils/haveSomeRole');

const validateRolMiddleware = (allowedRoles) => {
    return (req, res, next) => {
        const { authUser } = req;

        if (haveSomeRole(authUser, allowedRoles)) {
            next();
        } else {
            return next(new ClientError(403, 'Acceso Prohibido.'));
        }
        return undefined;
    };
};

module.exports = validateRolMiddleware;
