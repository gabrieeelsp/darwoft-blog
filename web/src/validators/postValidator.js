
import { ERROR_IS_REQUIRE } from '../utils/errorMessages'

export const postValidator = {
    
    title: (input, method) => {
        if (!input) return ERROR_IS_REQUIRE
    },
    
    categoryId: (input, method) => {
        if (!input) return ERROR_IS_REQUIRE
    },
}