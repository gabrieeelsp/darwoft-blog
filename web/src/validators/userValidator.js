
import validator from 'validator'
import { ERROR_IS_EMAIL, ERROR_IS_REQUIRE } from '../utils/errorMessages'

export const userValidator = {
    email: (input, method) => {
        if (!input) return ERROR_IS_REQUIRE
        if (!validator.isEmail(input)) return ERROR_IS_EMAIL

        return null;
    },
    password: (input, method) => {
        if (!input) return ERROR_IS_REQUIRE

        return null;
    }
}