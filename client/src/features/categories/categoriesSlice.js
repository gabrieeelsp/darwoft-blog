import { createSlice } from '@reduxjs/toolkit';
import { findAll, findOne, update } from './actions';

const initialState = {
    categories: null,
    category: null,

    loading: 'idle',
    error: null,
}

const categoriesSlice = createSlice({
    name: 'caegories',
    initialState,
    reducers: {
        cleanSlice: (state) => {
            state.loading = 'idle'
            state.category = null
            state.error = null
        },
    }, 
    extraReducers(builder) {
        builder
        .addCase(findAll.pending, (state) => {
            state.loading = 'pending'
        })
        .addCase(findAll.fulfilled, (state, action) => {
            if ( action.payload.updateState ) {
                state.categories = action.payload.data.categories
                state.pagination = action.payload.data.pagination
                
            }
            state.loading = 'succeeded'
            state.error = null

        })
        .addCase(findAll.rejected, (state, action) => {
            state.posts = null
            state.loading = 'failed'
            state.error = action.payload
        })

        .addCase(update.pending, (state) => {
            state.loading = 'pending'
        })
        .addCase(update.fulfilled, (state, action) => {
            state.loading = 'succeeded'
            state.category = action.payload.data
            if (state.categories) {
                
                const categoryFromList = state.categories.find((category) => category._id === action.payload.data._id)
                categoryFromList.name = state.category.name
            }

            state.error = null
        })
        .addCase(update.rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.payload
        })

        .addCase(findOne.pending, (state) => {
            state.loading = 'pending'
        })
        .addCase(findOne.fulfilled, (state, action) => {
            state.category = action.payload.data
            state.loading = 'succeeded'
            state.error = null
        })
        .addCase(findOne.rejected, (state, action) => {
            state.categories = null
            state.loading = 'failed'
            state.error = action.payload
        })
    }
})

export const { setCategory, cleanSlice } = categoriesSlice.actions;

export default categoriesSlice.reducer;