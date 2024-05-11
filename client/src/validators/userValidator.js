
import validator from 'validator'
import { ERROR_IS_EMAIL, ERROR_IS_REQUIRE, ERROR_IS_ALFA } from '../utils/errorMessages'

export const userValidator = {
    
    name: (input) => {
        if (!input) return ERROR_IS_REQUIRE
        if (!validator.isAlpha(input.trim().replace(' ', ''))) return ERROR_IS_ALFA
    },
    
    surname: (input) => {
        if (!input) return ERROR_IS_REQUIRE
        if (!validator.isAlpha(input.trim().replace(' ', ''))) return ERROR_IS_ALFA
    },
    
    email: (input) => {
        if (!input) return ERROR_IS_REQUIRE
        if (!validator.isEmail(input)) return ERROR_IS_EMAIL

        return null;
    },
    
    password: (input) => {
        if (!input) return ERROR_IS_REQUIRE

        return null;
    },

    passwordConfirmation: (input) => {
        if (!input) return ERROR_IS_REQUIRE

        return null;
    }
}