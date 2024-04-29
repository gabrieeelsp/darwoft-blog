export const validateField = (validator, field, value, method) => {
    return validator[field] ? validator[field](value, method) : null;
}