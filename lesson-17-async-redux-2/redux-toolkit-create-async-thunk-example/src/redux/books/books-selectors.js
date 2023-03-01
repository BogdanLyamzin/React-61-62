export const getAllBooks = ({books}) => books.items;
export const getFavoriteBooks = ({books}) => {
    const favoriteBooks = books.items.filter(({favorite}) => favorite);
    return favoriteBooks;
}
export const getFilteredBooks = ({books, filter}) => {
    if (!filter) {
        return books.items;
    }

    const normalizedFilter = filter.toLowerCase();
    const result = books.items.filter(({ title, author }) => {
        return (title.toLowerCase().includes(normalizedFilter) || author.toLowerCase().includes(normalizedFilter))
    })

    return result;
}