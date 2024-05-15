import { createSlice } from '@reduxjs/toolkit';
import { getInitValues } from './actions';

const initialState = {
    roles: null,
    genders: null,
    categories: null, // normalized {5: {id: 5, name: 'dfdf', slug: 'dfdf'}}

    loading: 'idle', // 'idle' | 'pending' | 'succeeded' | 'failed'
    error: null,
}

const normalize = (array) => {
    const normalized = {}
    array.forEach((item) => normalized[item._id] = item) 
    return normalized
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        updateCategory: (state, action) => {
            state.categories[action.payload.id].name = action.payload.name
            state.categories[action.payload.id].description = action.payload.description
            state.categories[action.payload.id].isVisible = action.payload.isVisible
        },
        addCategory: (state, action) => {
            state.categories[action.payload._id] = action.payload
        },

    },
    extraReducers(builder) {
        builder
            .addCase(getInitValues.pending, (state) => {
                state.loading = 'pending'
                state.error = null
            })
            .addCase(getInitValues.fulfilled, (state, action) => {
                state.loading = 'succeeded'
                state.error = null
                state.roles = action.payload.data.roles
                state.genders = action.payload.data.genders
                state.categories = normalize(action.payload.data.categories)
                
            })
            .addCase(getInitValues.rejected, (state, action) => {
                state.loading = 'failed'
                state.error = action.payload
            })
    }
})

// export const isAppReady = (state) => state.app.categories && state.app.roles && state.app.genders

export const getCategoryBySlug = (state, slug) => {
    if ( state.app.categories ){
        const categoryId = Object.keys(state.app.categories).find((categoryId) => state.app.categories[categoryId].slug === slug)
        return state.app.categories[categoryId]
    }
}
    
export const { updateCategory, addCategory } = appSlice.actions;

export default appSlice.reducer;