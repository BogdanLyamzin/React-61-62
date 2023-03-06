import { ADD_BOOK, DELETE_BOOK } from "./books-types";

const initialState = []

const booksReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ADD_BOOK:
            return [...state, payload];
        case DELETE_BOOK:
            return state.filter(item => item.id !== payload);
        default:
            return state;
    }
}

export default booksReducer;