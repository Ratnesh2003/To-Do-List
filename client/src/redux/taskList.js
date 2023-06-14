import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axiosAuthInstance from '../utils/requestInterceptor.js'

const initialState = {
  tasks: [],
  loading: 'idle'
}

export const getTasks = createAsyncThunk(
    'tasks/getTasks', async () => {
        const response = await axiosAuthInstance.get(process.env.REACT_APP_URL);
        console.log(response.data);
        return response.data;
    }
)

export const taskSlice = createSlice({
  name: 'taskList',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
    })
  }
})

// export const {  } = taskSlice.actions

export default taskSlice.reducer;