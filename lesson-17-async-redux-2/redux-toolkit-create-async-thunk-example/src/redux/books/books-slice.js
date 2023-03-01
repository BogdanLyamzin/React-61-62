import { createSlice } from "@reduxjs/toolkit";

import { fetchAllBooks, fetchAddBook, fetchDeleteBook } from "./books-operations";

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
            .addCase(fetchAllBooks.pending, (store) => {
                store.loading = true;
            })
            .addCase(fetchAllBooks.fulfilled, (store, { payload }) => {
                store.loading = false;
                store.items = payload;
            })
            .addCase(fetchAllBooks.rejected, (store, { payload }) => {
                store.loading = false;
                store.error = payload;
            })
            .addCase(fetchAddBook.pending, (store) => {
                store.loading = true;
            })
            .addCase(fetchAddBook.fulfilled, (store, { payload }) => {
                store.loading = false;
                store.items.push(payload);
            })
            .addCase(fetchAddBook.rejected, (store, { payload }) => {
                store.loading = false;
                store.error = payload;
            })
            .addCase(fetchDeleteBook.pending, (store) => {
                store.loading = true;
            })
            .addCase(fetchDeleteBook.fulfilled, (store, { payload }) => {
                store.loading = false;
                const index = store.items.findIndex(item => item.id === payload);
                store.items.splice(index, 1);
            })
            .addCase(fetchDeleteBook.rejected, (store, { payload }) => {
                store.loading = false;
                store.error = payload;
            })
    }
})

export default booksSlice.reducer;