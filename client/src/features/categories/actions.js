import { createAsyncThunk } from "@reduxjs/toolkit";
import httpService from "../../services/httpService";

export const findAll = createAsyncThunk(
    'categories/findAll', 
    async ({name, limit, exclude, page, save = true}, { rejectWithValue }) => {

        try {
            let url = `categories?`

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

export const update = createAsyncThunk('categories/update', async ({id, name, description, isVisible}, { rejectWithValue }) => {
    try {
        const url = `categories/${id}`
        const response = await httpService.put(url, {name, description, isVisible});
        
        return response.data;
    } catch (error) {
        if (error.response && error.response.data.error) 
            return rejectWithValue(error.response.data.error);

        return rejectWithValue(error.message);
    }
})

export const findOne = createAsyncThunk('categories/findOne', async (id, { rejectWithValue }) => {
    try {
        const url = `categories/${id}`
        const response = await httpService.get(url);
        
        return response.data;
    } catch (error) {
        // error.response => es un mensaje de error que yo envié
        if (error.response && error.response.data.error) 
            return rejectWithValue(error.response.data.error);

        return rejectWithValue(error.message);
    }
})

export const create = createAsyncThunk('categories/create', async ({ name, description }, { rejectWithValue }) => {
    try {
        const response = await httpService.post('/categories', { name, description });

        return response.data;
    } catch (error) {
        if (error.response && error.response.data.error) 
            return rejectWithValue(error.response.data.error);

        return rejectWithValue(error.message);
    }
})