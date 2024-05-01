import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async ({limit, offset}) => {
    const response = await fetch('https://api.weekday.technology/adhoc/getSampleJdJSON', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            limit,
            offset,
        }),
    });
    const data = await response.json();
    return data.jdList;
});

export const jobsSlice = createSlice({
    name: 'jobs',
    initialState: { jobs: [], loading: false },
    reducers: {
        clearJobs: (state) => {
            state.jobs = [];
        },
    },
    extraReducers: (builder) => {
        // When Jobs are loading
        builder.addCase(fetchJobs.pending, (state) => {
            state.loading = true;
        });
        // When Jobs are loaded
        builder.addCase(fetchJobs.fulfilled, (state, action) => {
            state.jobs.push(...action.payload);
            state.loading = false;
        });
    },
});

export const { clearJobs } = jobsSlice.actions;
export default jobsSlice.reducer;
