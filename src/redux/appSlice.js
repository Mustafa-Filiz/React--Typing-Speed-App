import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchWordsAsync = createAsyncThunk('get/getWords', async () => {
    const res = await axios.get(
        'https://random-word-api.herokuapp.com/word?number=300&swear=0'
    );
    return res.data;
});

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        text: '',
        isLoading: false,
        error: '',
    },
    reducers: {},
    extraReducers: {
        [fetchWordsAsync.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchWordsAsync.fulfilled]: (state, action) => {
            state.text = action.payload;
            state.isLoading = false;
        },
        [fetchWordsAsync.rejected]: (state, action) => {
            state.error = action.error.message;
            state.isLoading = false;
        },
    },
});

export const textSelector = (state) => state.app.text;

export default appSlice.reducer;
