import PropTypes from "prop-types";

import "./button.css";

const Button = ({text, type, active})=> {
    const fullClassName = active ? "btn active" : "btn";

    // return <button type={type} className={`btn ${active ? "active" : ""}`}>{text}</button>
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