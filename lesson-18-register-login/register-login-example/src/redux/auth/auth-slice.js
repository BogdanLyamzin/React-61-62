import { createSlice } from "@reduxjs/toolkit";

import { signup, login } from "./auth-operations";

const initialState = {
    user: {},
    token: "",
    isLogin: false,
    loading: false,
    error: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: builder => {
        builder.addCase(signup.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(signup.fulfilled, (state, {payload}) => {
            const {user, token} = payload;
            state.loading = false;
            state.user = user;
            state.token = token;
            state.isLogin = true;
        })
        .addCase(signup.rejected, (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        })
        .addCase(login.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(login.fulfilled, (state, {payload}) => {
            const {user, token} = payload;
            state.loading = false;
            state.user = user;
            state.token = token;
            state.isLogin = true;
        })
        .addCase(login.rejected, (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        })
    }
})

export default authSlice.reducer;