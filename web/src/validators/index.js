export const validateField = (validator, field, value, method) => {
    return validator[field](value, method)
}