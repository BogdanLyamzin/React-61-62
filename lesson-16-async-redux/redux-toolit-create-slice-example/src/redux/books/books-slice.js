import {createSlice} from "@reduxjs/toolkit";

import {fetchAllBooksLoading, fetchAllBooksSuccess, fetchAllBooksError, fetchAddBookLoading, fetchAddBookSuccess, fetchAddBookError, fetchDeleteBookLoading, fetchDeleteBookSuccess, fetchDeleteBookError} from "./books-actions";

const initialState = {
    items: [],
    loading: false,
    error: null,
}

const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        [fetchAllBooksLoading]: (store) => {
            store.loading = true;
        },
        [fetchAllBooksSuccess]: (store, {payload}) => {
            console.log(payload);
            store.loading = false;
            store.items = payload;
        },
        [fetchAllBooksError]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        },
        [fetchAddBookLoading]: (store) => {
            store.loading = true;
        },
        [fetchAddBookSuccess]: (store, {payload}) => {
            store.loading = false;
            store.items.push(payload);
        },
        [fetchAddBookError]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        },
        [fetchDeleteBookLoading]: (store) => {
            store.loading = true;
        },
        [fetchDeleteBookSuccess]: (store, {payload}) => {
            store.loading = false;
            const index = store.items.findIndex(item => item.id === payload);
            store.items.splice(index, 1);
        },
        [fetchDeleteBookError]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        }
    }
})

export const {addBook, deleteBook} = booksSlice.actions;
export default booksSlice.reducer;