import { createSlice } from '@reduxjs/toolkit';
import {changePassword, findProfileInfo, forgotPassword, login, logout, me, register, verifyAccount } from './actions'

const initialState = {
    user: null,
    accessToken: null,
    verified: false,

    loading: 'idle', // 'idle' | 'pending' | 'succeeded' | 'failed'
    error: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        updateUser: (state, action) => {
            const { name, surname, image } = action.payload.data.user;
            state.user.name = name;
            state.user.surname = surname;
            state.user.image = image;
        },
        cleanStatus: (state) => {
            state.loading = 'idle'
            state.error = null
        },
        setVerified: (state) => {
            state.verified = true
        }
    },
    extraReducers(builder) {
        builder
            .addCase(login.pending, (state) => {
                state.loading = 'pending'
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = 'succeeded'
                state.user = action.payload.data.user
                state.accessToken = action.payload.data.token
                state.error = null
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = 'failed'
                state.error = action.payload
            })

            .addCase(forgotPassword.pending, (state) => {
                state.loading = 'pending'
            })
            .addCase(forgotPassword.fulfilled, (state) => {
                state.loading = 'succeeded'
                state.error = null
            })
            .addCase(forgotPassword.rejected, (state, action) => {
                state.loading = 'failed'
                state.error = action.payload
            })

            .addCase(changePassword.pending, (state) => {
                state.loading = 'pending'
            })
            .addCase(changePassword.fulfilled, (state) => {
                state.loading = 'succeeded'
                state.error = null
            })
            .addCase(changePassword.rejected, (state, action) => {
                state.loading = 'failed'
                state.error = action.payload
            })

            .addCase(me.pending, (state) => {
                state.loading = 'pending'
            })
            .addCase(me.fulfilled, (state, action) => {
                state.loading = 'succeeded'
                state.user = action.payload.data
                state.accessToken = localStorage.getItem('accessToken') // repensar si esta bien llamar al localstorage desde aca o se prefiere que la api devuelva el token
                state.error = null
                state.verified = true
            })
            .addCase(me.rejected, (state, action) => {
                state.loading = 'failed'
                state.error = action.payload
                state.verified = true
            })

            .addCase(register.pending, (state) => {
                state.loading = 'pending'
            })
            .addCase(register.fulfilled, (state, action) => {
                state.loading = 'succeeded'
                state.user = action.payload.data.user
                state.error = null
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = 'failed'
                state.error = action.payload
            })

            .addCase(logout.pending, (state) => {
                state.loading = 'pending'
            })
            .addCase(logout.fulfilled, (state) => {
                state.loading = 'idle' // 'succeeded'
                state.user = null
                state.accessToken = null
                state.error = null
            })
            .addCase(logout.rejected, (state, action) => {
                state.loading = 'failed'
                state.error = action.payload
            })

            .addCase(verifyAccount.pending, (state) => {
                state.loading = 'pending'
            })
            .addCase(verifyAccount.fulfilled, (state) => {
                state.loading = 'succeeded'
                state.error = null
            })
            .addCase(verifyAccount.rejected, (state, action) => {
                state.loading = 'failed'
                state.error = action.payload
            })

            .addCase(findProfileInfo.pending, (state) => {
                state.loading = 'pending'
            })
            .addCase(findProfileInfo.fulfilled, (state, action) => {
                state.loading = 'succeeded'
                state.user.lastPostsViewed = action.payload.data.lastPostsViewed
                state.error = null
            })
            .addCase(findProfileInfo.rejected, (state, action) => {
                state.loading = 'failed'
                state.error = action.payload
            })
    }
})

export const { updateUser, cleanStatus, setVerified } = authSlice.actions;

export default authSlice.reducer;
