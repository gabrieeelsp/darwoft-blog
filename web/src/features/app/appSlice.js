import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import httpService from "../../services/httpService";

export const getInitValues = createAsyncThunk('app/init', async (_, { rejectWithValue }) => {
    try {
        const response = await httpService.get('app');

        return response.data;
    } catch (error) {
        if (error.response && error.response.data.error) 
            return rejectWithValue(error.response.data.error);

        return rejectWithValue(error.message);
    }
})

const initialState = {
    roles: null,
    genders: null,
    categories: null,

    status: null,
    error: null,
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getInitValues.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(getInitValues.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.roles = action.payload.data.roles
                state.genders = action.payload.data.genders
                state.categories = action.payload.data.categories
                state.error = null
            })
            .addCase(getInitValues.rejected, (state, action) => {
                state.status = 'error'
                state.error = action.payload
            })
    }
})

export const getCategoryBySlug = (state, slug) => state.app.categories.find((category) => category.slug === slug )
export const getCategoryById = (state, id) => state.app.categories.find((category) => category._id === id )
export default appSlice.reducer;