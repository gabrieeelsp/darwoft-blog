import { createAsyncThunk } from "@reduxjs/toolkit";
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