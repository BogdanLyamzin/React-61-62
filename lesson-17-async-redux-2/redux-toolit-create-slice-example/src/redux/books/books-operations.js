import * as api from "../../shared/services/books";

import * as actions from "./books-actions";

export const fetchAllBooks = ()=> {
    const func = async(dispatch) => {
        try {
            dispatch(actions.fetchAllBooksLoading()); // запрос пошел
            const data = await api.getAllBooks();
            dispatch(actions.fetchAllBooksSuccess(data)); // ответ пришел успешнор
        }
        catch({response}) {
            dispatch(actions.fetchAllBooksError(response.data.message)); // ответ пришел с ошибкой
        }
    }

    return func;
}

const isDublicate = (books, {title, author}) => {
    const normalizedTitle = title.toLowerCase();
    const normalizedAuthor = author.toLowerCase();
    const result = books.find(({ title, author }) => {
        return (title.toLowerCase() === normalizedTitle && author.toLowerCase() === normalizedAuthor)
    })

    return Boolean(result)
}

export const fetchAddBook = (data) => {
    const func = async(dispatch, getState) => {
        try {
            const {books} = getState();
            if(isDublicate(books.items, data)) {
                alert(`${data.title}. Author: ${data.author} is already ixist`);
                return false;
            }
            dispatch(actions.fetchAddBookLoading());
            const result = await api.addBook(data);
            dispatch(actions.fetchAddBookSuccess(result));
        }
        catch({response}) {
            dispatch(actions.fetchAddBookError(response.data.message)); 
        }
    }

    return func;
}

export const fetchDeleteBook = (id) => {
    const func = async(dispatch) => {
        try {
            dispatch(actions.fetchDeleteBookLoading());
            await api.deleteBook(id);
            dispatch(actions.fetchDeleteBookSuccess(id));
        }
        catch({response}) {
            dispatch(actions.fetchDeleteBookError(response.data.message)); 
        }
    }

    return func;
}