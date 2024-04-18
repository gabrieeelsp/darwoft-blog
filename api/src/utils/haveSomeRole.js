const haveSomeRole = (user, roles) => {
    if (user.roles.some((rol) => roles.includes(rol.name) && rol.isEnable)) {
        return true;
    }

    return false;
};

module.exports = haveSomeRole;
