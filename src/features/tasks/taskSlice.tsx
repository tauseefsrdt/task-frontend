import { createSlice } from "@reduxjs/toolkit";
import { addTask, deleteTask, fetchTasks, updateTask } from "./taskThunk";

interface Task {
  _id: string;
  title: string;
  description: string;
  status: string;
}
interface TypesTask {
  item: Task[];
  error: null | string;
  loading: boolean;
  isCreateTasks: boolean;
}
const initialState: TypesTask = {
  item: [],
  error: null,
  loading: false,
  isCreateTasks: false,
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    // omit reducer cases
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.item = action.payload;
        state.isCreateTasks = false;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.item.push(action.payload);
        state.isCreateTasks = true;
      })
        .addCase(updateTask.fulfilled, (state, action) => {
            state.item = state.item.map((t) => (t._id === action.payload._id ? action.payload : t));
        })
          .addCase(deleteTask.fulfilled, (state, action) => {
              state.item = state.item.filter(task => task._id !== action.payload);
          });

  },
});

export default taskSlice.reducer;
