import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import httpService from '../../services/httpService'

export const register = createAsyncThunk('auth/register', async ({name, surname, email, password, passwordconfirmation}, { rejectWithValue }) => {
    try {
        const response = await httpService.post('auth/register', {
            name,
            surname,
            email,
            password,
            "password-confirmation": passwordconfirmation,
        })

        return response.data;
    } catch (error) {
        if (error.response && error.response.data.error.messsage)
            return rejectWithValue(error.response.data.error.message);

        return rejectWithValue(error.message);

    }
})

export const login = createAsyncThunk('auth/login', async ({ email, password, isRememberMe }, { rejectWithValue }) => {
    try {
        const response = await httpService.post('auth/signin', {
            email,
            password,
        })

        if (isRememberMe )
            localStorage.setItem('accessToken', response.data.data.token)

        return response.data;
    } catch (error) {
        if (error.response && error.response.data.error.message) 
            return rejectWithValue(error.response.data.error.message);
        
        return rejectWithValue(error.message);
    }
})

const initialState = {
    user: null,
    accessToken: null,
    status: null,
    error: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(login.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.user = action.payload.data.user
                state.accessToken = action.payload.data.token
                state.error = null
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'errror'
                state.error = action.payload
            })

            .addCase(register.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(register.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.user = action.payload.data.user
                state.error = null
            })
            .addCase(register.rejected, (state, action) => {
                state.status = 'errror'
                state.error = action.payload
            })
    }
})

export default authSlice.reducer;
