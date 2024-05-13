import { createAsyncThunk } from "@reduxjs/toolkit";
import httpService from "../../services/httpService";

export const findAll = createAsyncThunk(
    'users/findAll', 
    async ({name, limit, exclude, page, save = true}, { rejectWithValue }) => {

        try {
            let url = `users?`

            if (name) url = url.concat(`name=${name}&`);
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

export const update = createAsyncThunk('users/update', async ({ id, name, surname, gender, isEnable }, { rejectWithValue }) => {
    try {
        const url = `users/${id}`;
        const data = {
            name, 
            surname,
            gender: gender ? gender : null,
            isEnable
        }
        const response = await httpService.put(url, data);

        return response.data;
    } catch (error) {
        if (error.response && error.response.data.error)
            return rejectWithValue(error.response.data.error)

        return rejectWithValue(error.response)
    }
})

export const updateRoles = createAsyncThunk('users/updateRoles', async ({ id, roles }, { rejectWithValue }) => {
    try {
        const url = `users/${id}/update-roles`;
        const data = {
            roles
        }
        const response = await httpService.put(url, data);

        return response.data;
    } catch (error) {
        if (error.response && error.response.data.error)
            return rejectWithValue(error.response.data.error)

        return rejectWithValue(error.response)
    }
})
export const addPostViewed = createAsyncThunk('users/addPostViewed', async ({id, postId}) => {
    try {
        const url = `users/${id}/add-post-viewed`;
        const data = {
            postId
        }
        const response = await httpService.post(url, data);

        return response.data;
    } catch (error) {}
})
