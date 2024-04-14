const haveSomeRole = (user, roles) => {
    if (user.roles.some((rol) => roles.includes(rol.name))) {
        return true;
    }

    return false;
};

module.exports = haveSomeRole;
