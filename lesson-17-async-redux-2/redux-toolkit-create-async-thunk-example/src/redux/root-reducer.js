import { combineReducers } from "@reduxjs/toolkit";

import booksReducer from "./books/books-slice";
import filterReducer from "./filter/filter-slice";

const rootReducer = combineReducers({
    books: booksReducer,
    filter: filterReducer,
})


export default rootReducer;