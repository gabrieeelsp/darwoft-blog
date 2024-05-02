import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import httpService from "../../services/httpService";

export const findOne = createAsyncThunk( 'users/findOne', async (id, { rejectWithValue }) => {
    try {
        const url = `users/${id}`;
        const response = await httpService.get(url);
        
        return response.data;
    } catch (error) {
        if (error.response && error.response.data.error)
            return rejectWithValue(error.response.data.error)

        return rejectWithValue(error.response)
    }
})

export const uploadImage = createAsyncThunk('posts/uploadImage', async ({ id, formData }, { rejectWithValue }) => {
    try {
        const url = `/users/${id}/upload-image`
        const response = await httpService.post(url, formData, { headers: {'Content-Type': 'multipart/form-data' }});

        return response.data;
    } catch (error) {
        if (error.response && error.response.data.error) 
            return rejectWithValue(error.response.data.error);

        return rejectWithValue(error.message);
    }
})

export const update = createAsyncThunk('users/update', async ({ id, name, surname, gender }, { rejectWithValue }) => {
    try {
        const url = `users/${id}`;
        const data = {
            name, 
            surname,
            gender: gender ? gender : null,
        }
        const response = await httpService.put(url, data);

        return response.data;
    } catch (error) {
        if (error.response && error.response.data.error)
            return rejectWithValue(error.response.data.error)

        return rejectWithValue(error.response)
    }
})

const initialState = {
    user: null,

    status: null,
    error: null,
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(findOne.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(findOne.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.user = action.payload.data.user
                state.error = null
            })
            .addCase(findOne.rejected, (state, action) => {
                state.status = 'error'
                state.error = action.payload
            })

            .addCase(update.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(update.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.user = action.payload.data.user
                state.error = null
            })
            .addCase(update.rejected, (state, action) => {
                state.status = 'error'
                state.error = action.payload
            })

            .addCase(uploadImage.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(uploadImage.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.user = action.payload.data.user
                state.error = null
            })
            .addCase(uploadImage.rejected, (state, action) => {
                state.status = 'error'
                state.error = action.payload
            })
    }
})

export default usersSlice.reducer;