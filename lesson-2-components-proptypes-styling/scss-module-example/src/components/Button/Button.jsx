import PropTypes from "prop-types";

import styles from "./button.module.scss";

const Button = ({text, type, active})=> {
    const fullClassName = active ? `${styles.btn} ${styles.active}` : styles.btn;

    return <button type={type} className={fullClassName}>{text}</button>
}

export default Button;

Button.defaultProps = {
    type: "submit"
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['submit', 'button', 'reset']),
    active: PropTypes.bool,
}