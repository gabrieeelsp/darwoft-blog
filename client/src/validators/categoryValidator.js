
import { ERROR_IS_REQUIRE } from '../utils/errorMessages'

export const categoryValidator = {
    
    name: (input) => {
        if (!input) return ERROR_IS_REQUIRE
    },

    description: (input) => {
        if (!input) return ERROR_IS_REQUIRE
    },
}