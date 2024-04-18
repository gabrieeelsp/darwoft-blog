const haveSomeRole = require('../utils/haveSomeRole');

const validateRolMiddleware = (allowedRoles) => {
    return (req, res, next) => {
        const { authUser } = req;

        if (haveSomeRole(authUser, allowedRoles)) {
            next();
        } else {
            return res
                .status(403)
                .json({ error: { message: 'Acceso Prohibido' } });
        }
        return undefined;
    };
};

module.exports = validateRolMiddleware;
