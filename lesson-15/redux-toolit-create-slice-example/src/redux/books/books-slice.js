import {createSlice} from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const booksSlice = createSlice({
    name: "books",
    initialState: [],
    reducers: {
        addBook: {
            reducer: (state, {payload}) =>  {
                state.push(payload);
            },
            prepare: data => {
                return {
                    payload: {
                        id: nanoid(),
                        ...data,
                    }
                }
            }
        },
        deleteBook: (state, {payload}) => state.filter(({id}) => id !== payload),
    }
})

export const {addBook, deleteBook} = booksSlice.actions;
export default booksSlice.reducer;