import { useSelector } from "react-redux";

import { getFavoriteBooks } from "../../redux/books/books-selectors";

const MyFavoriteBooksPage = () => {
    const books = useSelector(getFavoriteBooks);

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