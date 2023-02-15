import { useState, useEffect, useCallback } from "react";
import { nanoid } from "nanoid";

import MyBooksForm from "./MyBooksForm/MyBooksForm";
import MyBookList from "./MyBookList/MyBookList";
import MyBooksFilter from "./MyBooksFilter/MyBooksFilter";

import useLocalStorage from "../../shared/hooks/useLocalStorage";

import styles from "./my-books.module.scss";

const MyBooks = () => {
    const [books, setBooks] = useLocalStorage("my-books", []);

    const [filter, setFilter] = useState("");

    const isDublicate = (title, author) => {
        const normalizedTitle = title.toLowerCase();
        const normalizedAuthor = author.toLowerCase();
        const result = books.find(({ title, author }) => {
            return (title.toLowerCase() === normalizedTitle && author.toLowerCase() === normalizedAuthor)
        })

        return Boolean(result)
    }

    const addBook = ({ title, author }) => {
        if (isDublicate(title, author)) {
            alert(`${title}. Author: ${author} is already ixist`);
            return false;
        }

        setBooks(prevBooks => {
            const newBook = {
                id: nanoid(),
                title,
                author,
            }

            return [newBook, ...prevBooks]
        })
        return true;
    }

    const removeBook = (id) => {
        setBooks(prevBooks => prevBooks.filter(item => item.id !== id))
    }

    const handleFilter = useCallback(({ target }) => setFilter(target.value), []);

    const getFilteredBooks = () => {
        if (!filter) {
            return books;
        }

        const normalizedFilter = filter.toLowerCase();
        const result = books.filter(({ title, author }) => {
            return (title.toLowerCase().includes(normalizedFilter) || author.toLowerCase().includes(normalizedFilter))
        })

        return result;
    }

    const filteredBooks = getFilteredBooks();
    const isBooks = Boolean(filteredBooks.length);

    return (
        <div>
            <h3>My Books</h3>
            <div className={styles.wrapper}>
                <div className={styles.block}>
                    <h4>Add book</h4>
                    <MyBooksForm onSubmit={addBook} />
                </div>
                <div className={styles.block}>
                    <MyBooksFilter handleChange={handleFilter} />
                    {isBooks && <MyBookList removeBook={removeBook} items={filteredBooks} />}
                    {!isBooks && <p>No books in list</p>}
                </div>
            </div>
        </div>
    )
}

export default MyBooks;

/*
class MyBooks extends Component {

    state = {
        items: [...items],
        filter: "",
    }

    removeBook = (id) => {
        this.setState(({items}) => {
            const newBooks = items.filter(item => item.id !== id);
            return {items: newBooks}
        })
    }

    addBook = ({title, author}) => {
        if(this.isDublicate(title, author)) {
            alert(`${title}. Author: ${author} is already ixist`); // Notify.Alert(`${title}. Author: ${author} is already ixist`)
            return false;
        }

        this.setState(prevState => {
            const {items} = prevState;

            const newBook = {
                id: nanoid(),
                title,
                author,
            }

            return {items: [newBook, ...items]}
        })
        return true;
    }

    handleFilter = ({target})=> {
        this.setState({filter: target.value})
    }

    isDublicate(title, author) {
        const normalizedTitle = title.toLowerCase();
        const normalizedAuthor = author.toLowerCase();
        const {items} = this.state;
        const result = items.find(({title, author}) => {
            return (title.toLowerCase() === normalizedTitle && author.toLowerCase() === normalizedAuthor)
        })

        return Boolean(result)
    }

    getFilteredBooks() {
        const {filter, items} = this.state;
        if(!filter) {
            return items;
        }
        
        const normalizedFilter = filter.toLowerCase()
        const result = items.filter(({title, author})=> {
            return (title.toLowerCase().includes(normalizedFilter) ||  author.toLowerCase().includes(normalizedFilter))
        })

        return result;
    }

    render() {
        const {addBook, removeBook, handleFilter} = this;
        const items = this.getFilteredBooks();
        const isBooks = Boolean(items.length);
  
        return (
            <div>
                <h3>My Books</h3>
                <div className={styles.wrapper}>
                    <div className={styles.block}>
                        <h4>Add book</h4>
                        <MyBooksForm onSubmit={addBook} />
                    </div>
                    <div className={styles.block}>
                        <MyBooksFilter handleChange={handleFilter} />
                        {isBooks && <MyBookList removeBook={removeBook} items={items} />}
                        {!isBooks && <p>No books in list</p>}
                    </div>
                </div>
            </div>
        )
    }
}
*/
