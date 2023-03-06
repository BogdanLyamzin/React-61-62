import PropTypes from "prop-types";

import styles from "./my-book-list.module.scss";

const MyBookList = ({ removeBook, items }) => {

    const books = items.map(({ id, title, author, favorite }) => <li style={{fontWeight: favorite ? "bold" : "normal"}} key={id}>{title}. Author: {author}.
        <button onClick={() => removeBook(id)} type="button">Delete</button></li>);

    return (
        <ol>
            {books}
        </ol>
    )

}

export default MyBookList;

MyBookList.defaultProps = {
    items: []
}

MyBookList.propTypes = {
    removeBook: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title:  PropTypes.string.isRequired,
        author:  PropTypes.string.isRequired,
    }))
}