import PropTypes from "prop-types"

import styles from "./list-item.module.css";

const ListItem = ({title, year}) => {
    return <li className={styles.item}>{title}. {year}</li>
}

export default ListItem;

ListItem.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
}