export const capitalize = (input, every = false) => {
    if (!input) return ''
    if (every)
        return input.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

    return input.charAt(0).toUpperCase() + input.slice(1)
}

export const haveSomeRole = (user, roles) => {
    if (user.roles.some((rol) => roles.includes(rol.name) && rol.isEnable)) {
        return true;
    }

    return false;
};
