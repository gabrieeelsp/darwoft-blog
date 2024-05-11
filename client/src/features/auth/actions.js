import { createAsyncThunk } from "@reduxjs/toolkit";
import httpService from "../../services/httpService";

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