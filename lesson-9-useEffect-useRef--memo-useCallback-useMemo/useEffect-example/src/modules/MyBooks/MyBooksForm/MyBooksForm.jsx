import { useState } from "react";
import PropTypes from "prop-types";

import initialState from "./initialState";

import useForm from "../../../shared/hooks/useForm";

import styles from "../my-books.module.scss";

const MyBooksForm = ({onSubmit})=> {
    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit})
    /*
    const [state, setState] = useState({...inititalState})

    const handleChange = ({target}) => {
        const {name, value} = target;
        setState(prevState => {
            return {...prevState, [name]: value}
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit({...state});
        setState({...inititalState});
    }
    */

    const {title, author} = state;

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

