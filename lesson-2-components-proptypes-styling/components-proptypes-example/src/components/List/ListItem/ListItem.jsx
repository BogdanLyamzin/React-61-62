import PropTypes from "prop-types"

import "./list-item.css";

const ListItem = ({title, year}) => {
    return <li className="list-item">{title}. {year}</li>
}

export default ListItem;

ListItem.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
}