import { createReducer } from "@reduxjs/toolkit";

import { addBook, deleteBook } from "./books-actions";

const booksReducer = createReducer([], {
    [addBook]: (state, {payload}) => {
        state.push(payload);
    },
    [deleteBook]: (state, {payload}) => state.filter(item => item.id !== payload)
})

export default booksReducer;