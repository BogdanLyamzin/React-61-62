import { useMemo } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

import initialState from "./initialState";

import useForm from "../../../shared/hooks/useForm";

import styles from "../my-books.module.scss";

const MyBooksForm = ({onSubmit})=> {
    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit})

    const {title, author} = state;

    const titleId = useMemo(()=> nanoid(), []);
    const bookId = useMemo(()=> nanoid(), []);

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <label htmlFor={titleId}>Book title</label>
                <input id={titleId} name="title" value={title} onChange={handleChange} placeholder="Book title" />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor={bookId}>Book author</label>
                <input id={bookId} name="author" value={author} onChange={handleChange} placeholder="Book author" />
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

