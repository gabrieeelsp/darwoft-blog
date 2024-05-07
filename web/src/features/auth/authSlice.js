import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import httpService from '../../services/httpService'

export const me = createAsyncThunk('auth/me', async (_, { rejectWithValue }) => {
    try {
        const response = await httpService.get('auth/me');
        
        return response.data;
    } catch (error) {
        localStorage.removeItem('accessToken');
        if (error.response && error.response.data.error)
            return rejectWithValue(error.response.data.error);

        return rejectWithValue(error.message);
    }
})

export const forgotPassword = createAsyncThunk('auth/forgotPassword', async ({email}, { rejectWithValue }) => {
    try {
        const response = await httpService.post('auth/forgot-password', {
            email,
        })

        return response.data;
    } catch (error) {
        if (error.response && error.response.data.error)
            return rejectWithValue(error.response.data.error);

        return rejectWithValue(error.message);
    }
})

export const register = createAsyncThunk('auth/register', async ({name, surname, email, password, passwordConfirmation}, { rejectWithValue }) => {
    try {
        const response = await httpService.post('auth/signup', {
            name,
            surname,
            email,
            password,
            "password-confirmation": passwordConfirmation,
        })

        return response.data;
    } catch (error) {
        if (error.response && error.response.data.error)
            return rejectWithValue(error.response.data.error);

        return rejectWithValue(error.message);
    }
})

export const changePassword = createAsyncThunk('auth/changePassword', async ({password, passwordConfirmation, token}, { rejectWithValue }) => {
    try {
        const response = await httpService.post('auth/change-password', {
            token,
            password,
            "password-confirmation": passwordConfirmation,
        })

        return response.data;
    } catch (error) {
        if (error.response && error.response.data.error)
            return rejectWithValue(error.response.data.error);

        return rejectWithValue(error.message);
    }
})

export const verifyAccount = createAsyncThunk('auth/verifyAccount', async ({token}, { rejectWithValue }) => {
    try {
        const response = await httpService.post('auth/verify-account', {
            token,
        })

        return response.data;
    } catch (error) {
        if (error.response && error.response.data.error)
            return rejectWithValue(error.response.data.error);

        return rejectWithValue(error.message);
    }
})

export const login = createAsyncThunk('auth/login', async ({ email, password, rememberMe }, { rejectWithValue }) => {
    try {
        const response = await httpService.post('auth/signin', {
            email,
            password,
        })

        if (rememberMe )
            localStorage.setItem('accessToken', response.data.data.token)

        return response.data;
    } catch (error) {
        if (error.response && error.response.data.error) 
            return rejectWithValue(error.response.data.error);
        
        return rejectWithValue(error.message);
    }
})

export const logout = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
    try {
        const response = await httpService.post('auth/signout')

        localStorage.removeItem('accessToken');
        
        return response.data;
    } catch (error) {
        if (error.response && error.response.data.error) 
            return rejectWithValue(error.response.data.error);
        
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
        updateUser: (state, action) => {
            const { name, surname } = action.payload.data.user;
            state.user.name = name;
            state.user.surname = surname;
        },
        cleanStatus: (state) => {
            state.status = null
            state.error = null
        }
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
                state.status = 'error'
                state.error = action.payload
            })

            .addCase(forgotPassword.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(forgotPassword.fulfilled, (state) => {
                state.status = 'succeeded'
                state.error = null
            })
            .addCase(forgotPassword.rejected, (state, action) => {
                state.status = 'error'
                state.error = action.payload
            })

            .addCase(changePassword.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(changePassword.fulfilled, (state) => {
                state.status = 'succeeded'
                state.error = null
            })
            .addCase(changePassword.rejected, (state, action) => {
                state.status = 'error'
                state.error = action.payload
            })

            .addCase(me.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(me.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.user = action.payload.data
                state.accessToken = localStorage.getItem('accessToken') // repensar si esta bien llamar al localstorage desde aca o se prefiere que la api devuelva el token
                state.error = null
            })
            .addCase(me.rejected, (state, action) => {
                state.status = 'error'
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
                state.status = 'error'
                state.error = action.payload
            })

            .addCase(logout.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(logout.fulfilled, (state) => {
                state.status = 'succeeded'
                state.user = null
                state.accessToken = null
                state.error = null
            })
            .addCase(logout.rejected, (state, action) => {
                state.status = 'error'
                state.error = action.payload
            })

            
    }
})

export const { updateUser, cleanStatus } = authSlice.actions;

export default authSlice.reducer;
