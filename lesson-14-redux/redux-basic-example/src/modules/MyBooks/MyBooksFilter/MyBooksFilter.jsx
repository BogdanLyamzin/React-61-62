import PropTypes from "prop-types";

import styles from "../my-books.module.scss";

const MyBooksFilter = ({handleChange}) => {
    return (
        <div className={styles.formGroup}>
            <label>Filter books</label>
            <input name="filter" onChange={handleChange} placeholder="Filter books" />
        </div>
    )
}

export default MyBooksFilter;

MyBooksFilter.propTypes = {
    handleChange: PropTypes.func.isRequired,
}