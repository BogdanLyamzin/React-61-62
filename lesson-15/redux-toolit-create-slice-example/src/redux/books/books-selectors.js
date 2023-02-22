export const getAllBooks = store => store.books;
export const getFavoriteBooks = ({books}) => {
    const favoriteBooks = books.filter(({favorite}) => favorite);
    return favoriteBooks;
}
export const getFilteredBooks = ({books, filter}) => {
    if (!filter) {
        return books;
    }

    const normalizedFilter = filter.toLowerCase();
    const result = books.filter(({ title, author }) => {
        return (title.toLowerCase().includes(normalizedFilter) || author.toLowerCase().includes(normalizedFilter))
    })

    return result;
}