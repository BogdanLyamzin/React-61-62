import { useState } from "react";
// import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

// import { fetchAddBook } from "../../../redux/books/books-operations";

import inititalState from "./initialState";

import styles from "../my-books.module.scss";

const MyBooksForm = ({onSubmit})=> {
    // const dispatch = useDispatch()
    const [state, setState] = useState({...inititalState})

    const handleChange = ({target}) => {
        const {name, value, type, checked} = target;
        const newValue = type === "checkbox" ? checked : value;
        setState(prevState => {
            return {...prevState, [name]: newValue}
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        // dispatch(fetchAddBook({...state}))
        onSubmit({...state});
        setState({...inititalState});
    }

    const {title, author, favorite} = state;

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <label>Book title</label>
                <input name="title" value={title} onChange={handleChange} placeholder="Book title" />
            </div>
            <div className={styles.formGroup}>
                <label>Book author</label>
                <input name="author" value={author} onChange={handleChange} placeholder="Book author" />
            </div>
            <div>
                <label>Favorite</label>
                <input name="favorite" checked={favorite} onChange={handleChange} type="checkbox" />
            </div>
            <button type="submit">Add book</button>
        </form>
    )
}

export default MyBooksForm;

MyBooksForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

/*
class MyBooksForm extends Component {
    state = {...inititalState}

    handleSubmit = (e) => {
        e.preventDefault();
        const {onSubmit} = this.props;
        const result = onSubmit({...this.state});
        if(result) {
            this.reset();
        }
    }

    reset() {
        this.setState({...inititalState})
    }

    handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({
            [name]: value
        })
    }

    render() {
        const {handleChange, handleSubmit} = this;
        const {title, author} = this.state;

        return (
            <form onSubmit={handleSubmit}>
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
        )
    }
}
*/

