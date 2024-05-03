import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import httpService from "../../services/httpService";

export const findAll = createAsyncThunk('posts/findAll', async ({authorId, categoryId, title, limit, exclude, page, save = true}, { rejectWithValue }) => {

    try {
        let url = `posts?`

        if (authorId) url = url.concat(`author-id=${authorId}&`);
        if (categoryId) url = url.concat(`category-id=${categoryId}&`);
        if (title) url = url.concat(`title=${title}&`);
        if (exclude) url = url.concat(`exclude=${exclude}&`)

        if (limit) url = url.concat(`limit=${limit}&`);
        if (page) url = url.concat(`page=${page}&`);
        const response = await httpService.get(url);

        response.data.updateState = save
        return response.data;        
    } catch (error) {
        if (error.response && error.response.data.error) 
            return rejectWithValue(error.response.data.error);

        return rejectWithValue(error.message);
    }
})

export const findOne = createAsyncThunk('posts/findOne', async (id, { rejectWithValue }) => {
    try {
        const url = `posts/${id}`
        const response = await httpService.get(url);
        
        return response.data;
    } catch (error) {
        // error.response => es un mensaje de error que yo envié
        if (error.response && error.response.data.error) 
            return rejectWithValue(error.response.data.error);

        return rejectWithValue(error.message);
    }
})

export const create = createAsyncThunk('posts/create', async ({ title, categoryId }, { rejectWithValue }) => {
    try {
        const response = await httpService.post('/posts', { title, "category-id": categoryId });

        return response.data;
    } catch (error) {
        if (error.response && error.response.data.error) 
            return rejectWithValue(error.response.data.error);

        return rejectWithValue(error.message);
    }
})

export const uploadImage = createAsyncThunk('posts/uploadImage', async ({ id, formData }, { rejectWithValue }) => {
    try {
        const url = `/posts/${id}/upload-image`
        const response = await httpService.post(url, formData, { headers: {'Content-Type': 'multipart/form-data' }});

        return response.data;
    } catch (error) {
        if (error.response && error.response.data.error) 
            return rejectWithValue(error.response.data.error);

        return rejectWithValue(error.message);
    }
})

export const update = createAsyncThunk('posts/update', async ({id, title, categoryId, content, excerpt}, { rejectWithValue }) => {
    try {
        const url = `posts/${id}`
        const response = await httpService.put(url, {title, "category-id": categoryId, content, excerpt});

        return response.data;
    } catch (error) {
        if (error.response && error.response.data.error) 
            return rejectWithValue(error.response.data.error);

        return rejectWithValue(error.message);
    }
})

const initialState = {
    posts: null,
    post: null,
    pagination: null,

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
        },
        removeImage: (state) => {
            state.post.image = undefined;
        },

    },
    extraReducers(builder) {
        builder
            .addCase(findOne.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(findOne.fulfilled, (state, action) => {
                state.post = action.payload.data
                state.status = 'succeeded'
                state.error = null
            })
            .addCase(findOne.rejected, (state, action) => {
                state.post = null
                state.status = 'error'
                state.error = action.payload
            })

            .addCase(findAll.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(findAll.fulfilled, (state, action) => {
                if ( action.payload.updateState ) {
                    state.posts = action.payload.data.posts
                    state.pagination = action.payload.data.pagination
                    
                }
                state.status = 'succeeded'
                state.error = null

            })
            .addCase(findAll.rejected, (state, action) => {
                state.posts = null
                state.status = 'error'
                state.error = action.payload
            })

            .addCase(create.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(create.fulfilled, (state, action) => {
                state.post = action.payload.data
                state.status = 'succeeded'
                state.error = null
            })
            .addCase(create.rejected, (state, action) => {
                state.post = null
                state.status = 'error'
                state.error = action.payload
            })

            .addCase(update.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(update.fulfilled, (state, action) => {
                state.post = action.payload.data
                state.status = 'succeeded'
                state.error = null
            })
            .addCase(update.rejected, (state, action) => {
                state.post = null
                state.status = 'error'
                state.error = action.payload
            })

            .addCase(uploadImage.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(uploadImage.fulfilled, (state, action) => {
                state.post = action.payload.data
                state.status = 'succeeded'
                state.error = null
            })
            .addCase(uploadImage.rejected, (state, action) => {
                state.post = null
                state.status = 'error'
                state.error = action.payload
            })
    }
})

export const { cleanSlice, removeImage } = postsSlice.actions;

export default postsSlice.reducer;