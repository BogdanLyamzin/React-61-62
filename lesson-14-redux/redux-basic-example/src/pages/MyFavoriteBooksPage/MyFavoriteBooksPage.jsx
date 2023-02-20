import { useSelector } from "react-redux";

const MyFavoriteBooksPage = () => {
    const books = useSelector(store => {
        const favoriteBooks = store.books.filter(({favorite}) => favorite);
        return favoriteBooks;
    });

    const elements = books.map(({id, name, author}) => <li key={id}>Name: {name}. Author: {author}.</li>)
    
    return (
        <div>
            <h1>My Favorite books</h1>
            <ul>
                {elements}
            </ul>
        </div>
    )
}

export default MyFavoriteBooksPage;