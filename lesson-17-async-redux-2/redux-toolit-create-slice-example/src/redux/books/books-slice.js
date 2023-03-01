import {createSlice} from "@reduxjs/toolkit";

import {fetchAllBooksLoading, fetchAllBooksSuccess, fetchAllBooksError, fetchAddBookLoading, fetchAddBookSuccess, fetchAddBookError, fetchDeleteBookLoading, fetchDeleteBookSuccess, fetchDeleteBookError} from "./books-actions";

// import * as actions from "./books-actions";

const initialState = {
    items: [],
    loading: false,
    error: null,
}

const booksSlice = createSlice({
    name: "books",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllBooksLoading, (store) => {
                store.loading = true;
            })
            .addCase(fetchAllBooksSuccess, (store, {payload}) => {
                store.loading = false;
                store.items = payload;
            })
            .addCase(fetchAllBooksError, (store, {payload}) => {
                store.loading = false;
                store.error = payload;
            })
            .addCase(fetchAddBookLoading, (store) => {
                store.loading = true;
            })
            .addCase(fetchAddBookSuccess, (store, {payload}) => {
                store.loading = false;
                store.items.push(payload);
            })
            .addCase(fetchAddBookError, (store, {payload}) => {
                store.loading = false;
                store.error = payload;
            })
            .addCase(fetchDeleteBookLoading, (store) => {
                store.loading = true;
            })
            .addCase(fetchDeleteBookSuccess, (store, {payload}) => {
                store.loading = false;
                const index = store.items.findIndex(item => item.id === payload);
                store.items.splice(index, 1);
            })
            .addCase(fetchDeleteBookError, (store, {payload}) => {
                store.loading = false;
                store.error = payload;
            })
    }
})

export default booksSlice.reducer;