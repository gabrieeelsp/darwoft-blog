import { createAsyncThunk } from "@reduxjs/toolkit";
import httpService from "../../services/httpService";

export const findAll = createAsyncThunk(
    'posts/findAll', 
    async ({authorId, categoryId, title, limit, exclude, page, isVisible, save = true}, { rejectWithValue }) => {

        try {
            let url = `posts?`

            if (authorId) url = url.concat(`author-id=${authorId}&`);
            if (categoryId) url = url.concat(`category-id=${categoryId}&`);
            if (title) url = url.concat(`title=${title}&`);
            if (isVisible) url = url.concat(`is-visible=${isVisible}&`)
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

export const findOne = createAsyncThunk('posts/findOne', async ({id, isVisible}, { rejectWithValue }) => {
    try {
        let url = `posts/${id}?`
        if (isVisible) url = url.concat(`is-visible=${isVisible}&`)
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

export const update = createAsyncThunk('posts/update', async ({id, title, isVisible, categoryId, content, excerpt}, { rejectWithValue }) => {
    try {
        const url = `posts/${id}`
        const response = await httpService.put(url, {title, isVisible, "category-id": categoryId, content, excerpt});

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

export const findAllComments = createAsyncThunk('posts/findAllComments', async ({postId, authorId, limit, page}, { rejectWithValue}) => {
    try {
        let url = `comments?`

        if (postId) url = url.concat(`post-id=${postId}&`);
        if (authorId) url = url.concat(`author-id=${authorId}&`);

        if (limit) url = url.concat(`limit=${limit}&`);
        if (page) url = url.concat(`page=${page}&`);
        const response = await httpService.get(url);

        return response.data;
    } catch (error) {
        if (error.response && error.response.data.error) 
            return rejectWithValue(error.response.data.error);

        return rejectWithValue(error.message);
    }
})

export const createComment = createAsyncThunk('posts/createComment', async ({postId, content}, {rejectWithValue}) => {
    try {
        const response = await httpService.post('/comments', { content, "post-id": postId });

        return response.data;
    } catch (error) {
        if (error.response && error.response.data.error) 
            return rejectWithValue(error.response.data.error);

        return rejectWithValue(error.message);
    }
})