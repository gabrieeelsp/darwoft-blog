const validateRolMiddleware = (allowedRoles) => {
    return (req, res, next) => {
        const { authUser } = req;

        if (authUser.roles.some((rol) => allowedRoles.includes(rol.name))) {
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
