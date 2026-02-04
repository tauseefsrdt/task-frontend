import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./authThunks";
interface initialStateTypes {
    user: null | { email: string };
    error: null | string;
    token: string | null;
    loading: boolean;
    isRegisterSuccess: boolean;
    isLoginSuccess: boolean;
    isLogout: boolean;
}
const initialState: initialStateTypes = {
    user: null,
    error: null,
    token: localStorage.getItem("token"),
    loading: false,
    isRegisterSuccess: false,
    isLoginSuccess: false,
    isLogout: false,
};
const authSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isLogout = true;
            (state.isRegisterSuccess = false), (state.isLoginSuccess = false), localStorage.removeItem("token");
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.isRegisterSuccess = false;
                state.isLogout = false;
            })
            .addCase(registerUser.fulfilled, (state) => {
                state.loading = false;
                state.isRegisterSuccess = true;
                state.isLogout = false;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
                state.isRegisterSuccess = false;
                state.isLogout = false;
            })
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.isLoginSuccess = false;
                state.isLogout = false;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isLoginSuccess = true;
                localStorage.setItem("token", action.payload.token);
                state.isLogout = false;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
                state.isLoginSuccess = false;
                state.isLogout = false;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
