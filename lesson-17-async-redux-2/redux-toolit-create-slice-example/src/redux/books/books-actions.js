import { createAction } from "@reduxjs/toolkit";

export const fetchAllBooksLoading = createAction("books/fetch/loading");
export const fetchAllBooksSuccess = createAction("books/fetch/success");
export const fetchAllBooksError = createAction("books/fetch/error");

export const fetchAddBookLoading = createAction("books/add/loading");
export const fetchAddBookSuccess = createAction("books/add/success");
export const fetchAddBookError = createAction("books/add/error");

export const fetchDeleteBookLoading = createAction("books/delete/loading");
export const fetchDeleteBookSuccess = createAction("books/delete/success");
export const fetchDeleteBookError = createAction("books/delete/error");