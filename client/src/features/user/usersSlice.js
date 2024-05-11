/* eslint-disable no-prototype-builtins */
import { createSlice } from "@reduxjs/toolkit"

import { findOne, update, uploadImage, findAll, updateRoles } from './actions'

const initialState = {
    users: null,
    pagination: null, 
    user: null,

    loading: 'idle', // 'idle' | 'pending' | 'succeeded' | 'failed'
    error: null,
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        removeImage: (state) => {
            state.user.image = undefined;
        },
        cleanSlice: (state) => {
            state.loading = 'idle'
            state.user = null
            state.error = null
        },

        updateUser: (state, action) => {
            if ( !state.users ) return
            const userUdated = state.users.find((user) => user._id === action.payload.id)
            Object.keys(action.payload).forEach((property) => {
                if (action.payload[property] !== 'id')  userUdated[property] = action.payload[property]
            })
        },
    },
    extraReducers(builder) {
        builder
            .addCase(findAll.pending, (state) => {
                state.loading = 'pending'
            })
            .addCase(findAll.fulfilled, (state, action) => {
                if ( action.payload.updateState ) {
                    state.users = action.payload.data.users
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

            .addCase(findOne.pending, (state) => {
                state.loading = 'pending'
            })
            .addCase(findOne.fulfilled, (state, action) => {
                state.loading = 'succeeded'
                state.user = action.payload.data.user
                state.error = null
            })
            .addCase(findOne.rejected, (state, action) => {
                state.loading = 'failed'
                state.error = action.payload
            })

            .addCase(update.pending, (state) => {
                state.loading = 'pending'
            })
            .addCase(update.fulfilled, (state, action) => {
                state.loading = 'succeeded'
                state.user = action.payload.data.user
                state.error = null
            })
            .addCase(update.rejected, (state, action) => {
                state.loading = 'failed'
                state.error = action.payload
            })

            .addCase(uploadImage.pending, (state) => {
                state.loading = 'pending'
            })
            .addCase(uploadImage.fulfilled, (state, action) => {
                state.loading = 'succeeded'
                state.user = action.payload.data.user
                state.error = null
            })
            .addCase(uploadImage.rejected, (state, action) => {
                state.loading = 'failed'
                state.error = action.payload
            })

            .addCase(updateRoles.pending, (state) => {
                state.loading = 'pending'
            })
            .addCase(updateRoles.fulfilled, (state, action) => {
                state.loading = 'succeeded'
                state.user = action.payload.data
                state.error = null
            })
            .addCase(updateRoles.rejected, (state, action) => {
                state.loading = 'failed'
                state.error = action.payload
            })
    }
})

export const { removeImage, cleanSlice, updateUser } = usersSlice.actions;

export default usersSlice.reducer;