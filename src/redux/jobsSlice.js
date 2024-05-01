import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
    const response = await fetch('https://api.weekday.technology/adhoc/getSampleJdJSON', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            limit: 10,
            offset: 0,
        }),
    });
    const data = await response.json();
    return data.jdList;
});


export const jobsSlice = createSlice({
    name: 'jobs',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchJobs.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

export default jobsSlice.reducer;
