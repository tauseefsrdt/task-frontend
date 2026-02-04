import { createAsyncThunk } from "@reduxjs/toolkit"
import API from "../../api/axiosinstance"

export const registerUser = createAsyncThunk('auth/register', async (data: { email: string, password: string }, { rejectWithValue }) => {
    try {
        await API.post('auth/register', data)
    }
    catch (err: any) {
        return rejectWithValue(err.respone?.data?.message || "Registration Failed")
    }

})
export const loginUser = createAsyncThunk('auth/login', async (data: { email: string, password: string }, { rejectWithValue }) => {
    try {
       const res=await API.post('auth/login', data);
       return res.data;
    }
    catch (err: any) {
        return rejectWithValue(err.respone?.data?.message || "Login Failed")
    }

})
