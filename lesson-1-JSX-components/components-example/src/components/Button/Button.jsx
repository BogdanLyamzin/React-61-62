import "./button.css";
const Button = ({text, type})=> {
    // console.log(props);

    return <button type={type} className="btn">{text}</button>
}

export default Button;