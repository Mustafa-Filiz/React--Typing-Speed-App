import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
    name: 'app',
    initialState: {
		text:"",
		
	},
    reducers: {},
    extraReducers: {},
});

export default appSlice.reducer;
