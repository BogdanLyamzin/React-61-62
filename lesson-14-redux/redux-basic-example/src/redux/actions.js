import { nanoid } from "nanoid"

import { ADD_BOOK, DELETE_BOOK } from "./types";

export const addBook = payload => {
    return {
        type: ADD_BOOK,
        payload: {
            id: nanoid(),
            ...payload,
        }
    }
}

export const deleteBook = payload => {
    return {
        type: DELETE_BOOK,
        payload,
    }
}