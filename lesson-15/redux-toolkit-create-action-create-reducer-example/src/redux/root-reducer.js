import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import booksReducer from "./books/books-reducer";
import filterReducer from "./filter/filter-reducer";

const rootReducer = combineReducers({
    books: booksReducer,
    filter: filterReducer,
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer;