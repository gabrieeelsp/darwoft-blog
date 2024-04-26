import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import httpService from "../../services/httpService";

export const findOne = createAsyncThunk('posts/findOne', async (id, { rejectWithValue }) => {
    try {
        const url = `posts/${id}`
        const response = await httpService.get(url);
        
        return response.data;
    } catch (error) {
        // error.response => es un mensaje de error que yo envié
        if (error.response && error.response.data.error.message) 
            return rejectWithValue(error.response.data.error.message);

        return rejectWithValue(error.message);
    }
})

const initialState = {
    post: null,
    status: null,
    error: null,
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        cleanSlice: (state) => {
            state.status = null
            state.post = null
            state.error = null
        }

    },
    extraReducers(builder) {
        builder
            .addCase(findOne.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(findOne.fulfilled, (state, action) => {
                state.post = action.payload.data
                state.status = 'succedded'
                state.error = null
            })
            .addCase(findOne.rejected, (state, action) => {
                state.post = null
                state.status = 'error'
                state.error = action.payload
            })
    }
})

export const { cleanSlice } = postsSlice.actions;

export default postsSlice.reducer;