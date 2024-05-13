import { createAsyncThunk } from "@reduxjs/toolkit";
import httpService from "../../services/httpService";

export const findAll = createAsyncThunk('comments/findAll', async ({postId, authorId, limit, page, save = true}, { rejectWithValue}) => {
    try {
        let url = `comments?`

        if (postId) url = url.concat(`post-id=${postId}&`);
        if (authorId) url = url.concat(`author-id=${authorId}&`);

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
