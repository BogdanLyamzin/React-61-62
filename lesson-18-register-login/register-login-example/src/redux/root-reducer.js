import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./auth/auth-slice";
import booksReducer from "./books/books-slice";
import filterReducer from "./filter/filter-slice";

const rootReducer = combineReducers({
    auth: authReducer,
    books: booksReducer,
    filter: filterReducer,
})


export default rootReducer;