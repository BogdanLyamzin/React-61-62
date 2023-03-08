import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../shared/services/books";

export const fetchAllBooks = createAsyncThunk(
    "books/fetch-all",
    async(_, thunkAPI) => {
        try {
            const data = await api.getAllBooks();
            return data;
        }
        catch({response}) {
            return thunkAPI.rejectWithValue(response.data);
        }
    }
)

export const fetchAddBook = createAsyncThunk(
    "books/add",
    async(data, {rejectWithValue}) => {
        try {
            const result = await api.addBook(data);
            return result;
        }
        catch({response}) {
            return rejectWithValue(response.data);
        }
    },
    {
        condition: ({title, author}, {getState}) => {
            const {books} = getState();
            const normalizedTitle = title.toLowerCase();
            const normalizedAuthor = author.toLowerCase();
            const result = books.items.find(({ title, author }) => {
                return (title.toLowerCase() === normalizedTitle && author.toLowerCase() === normalizedAuthor)
            })
            if(result){
                alert(`${title}. Author: ${author} is already ixist`);
                return false;
            }
        }
    }
)

export const fetchDeleteBook = createAsyncThunk(
    "books/delete",
    async(id, {rejectWithValue}) => {
        try {
            await api.deleteBook(id);
            return id;
        }
        catch({response}) {
            return rejectWithValue(response.data);
        }
    }
)