import { createSlice } from '@reduxjs/toolkit';

import randomWords from "random-words"

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        text: randomWords(300),
        typing: '',
        timer: 60,
    },
    reducers: {
        setTyping: (state, action) => {
            state.typing = action.payload;
        },
    },
});

export const textSelector = (state) => state.app.text;
export const typingSelector = (state) => state.app.typing;
export const timerSelector = (state) => state.app.timer;

export const { setTyping, countdown } = appSlice.actions;

export default appSlice.reducer;
