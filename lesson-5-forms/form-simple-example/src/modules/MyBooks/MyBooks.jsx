import { Component } from "react";
import { nanoid } from "nanoid";

import styles from "./my-books.module.scss";

class MyBooks extends Component {

    state = {
        items: [
            {
                id: nanoid(),
                title: "Worm",
                author: "Джон Маккрей",
            },
            {
                id: nanoid(),
                title: "Girl genius",
                author: "Foglio",
            },
        ],
        title: "",
        author: "",
        filter: "",
    }

    removeBook(id) {
        this.setState(({items}) => {
            const newBooks = items.filter(item => item.id !== id);
            return {items: newBooks}
        })
    }

    addBook = (e) => {
        e.preventDefault();
        const {title, author} = this.state;
        if(this.isDublicate(title, author)) {
            return alert(`${title}. Author: ${author} is already ixist`); // Notify.Alert(`${title}. Author: ${author} is already ixist`)
        }

        this.setState(prevState => {
            const {title, author, items} = prevState;

            const newBook = {
                id: nanoid(),
                title,
                author,
            }

            return {items: [newBook, ...items], title: "", author: ""}
        })
    }

    handleChange = ({target}) => {
        const {name, value} = target;
        this.setState({
            [name]: value
        })
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
        const {addBook, handleChange} = this;
        const {title, author} = this.state;
        const items = this.getFilteredBooks();

        const books = items.map(({id, title, author}) => <li key={id}>{title}. Author: {author}. 
            <button onClick={()=> this.removeBook(id)} type="button">Delete</button></li>)
        
        return (
            <div>
                <h3>My Books</h3>
                <div className={styles.wrapper}>
                    <div className={styles.block}>
                        <h4>Add book</h4>
                        <form action="" onSubmit={addBook}>
                            <div className={styles.formGroup}>
                                <label>Book title</label>
                                <input name="title" value={title} onChange={handleChange} placeholder="Book title" />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Book author</label>
                                <input name="author" value={author} onChange={handleChange} placeholder="Book author" />
                            </div>
                            <button type="submit">Add book</button>
                        </form>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.formGroup}>
                            <label>Filter books</label>
                            <input name="filter" onChange={handleChange} placeholder="Filter books" />
                        </div>
                        <ol>
                            {books}
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyBooks;