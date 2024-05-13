/* eslint-disable no-prototype-builtins */
import { createSlice } from "@reduxjs/toolkit"

import { findAll } from './actions'

const initialState = {
    comments: null,
    pagination: null, 

    loading: 'idle', // 'idle' | 'pending' | 'succeeded' | 'failed'
    error: null,
}

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {

        updateComment: (state, action) => {

        },
    },
    extraReducers(builder) {
        builder
            .addCase(findAll.pending, (state) => {
                state.loading = 'pending'
            })
            .addCase(findAll.fulfilled, (state, action) => {
                if ( action.payload.updateState ) {
                    state.comments = action.payload.data.comments
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
    }
})

export const { updateComment } = commentsSlice.actions;

export default commentsSlice.reducer;