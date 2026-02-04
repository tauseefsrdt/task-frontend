import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/axiosinstance";

export const fetchTasks = createAsyncThunk("tasks/fetch", async () => {
  const res = await API.get("/tasks");
  return res.data;
});

export const addTask = createAsyncThunk("tasks/add", async (task: { title: string; description: string; status: string }) => {
  const res = await API.post("/tasks", task);
  return res.data;
});

export const deleteTask = createAsyncThunk("tasks/deleteTask",async (id: string) => {
        await API.delete(`/tasks/${id}`);
        return id; 
    }
);
export const updateTask = createAsyncThunk("tasks/updateTask", async (task: {_id:string; title: string; description: string; status: string }) => {
    const res = await API.put(`/tasks/${task._id}`, task);
    return res.data;
});

