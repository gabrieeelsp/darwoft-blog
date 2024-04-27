
import validator from 'validator'
import { ERROR_IS_EMAIL, ERROR_IS_REQUIRE, ERROR_IS_ALFA } from '../utils/errorMessages'

export const userValidator = {
    
    name: (input, method) => {
        if (!input) return ERROR_IS_REQUIRE
        if (!validator.isAlpha(input)) return ERROR_IS_ALFA
    },
    
    surname: (input, method) => {
        if (!input) return ERROR_IS_REQUIRE
        if (!validator.isAlpha(input)) return ERROR_IS_ALFA
    },
    
    email: (input, method) => {
        if (!input) return ERROR_IS_REQUIRE
        if (!validator.isEmail(input)) return ERROR_IS_EMAIL

        return null;
    },
    
    password: (input, method) => {
        if (!input) return ERROR_IS_REQUIRE

        return null;
    },

    passwordConfirmation: (input, method) => {
        if (!input) return ERROR_IS_REQUIRE

        return null;
    }
}