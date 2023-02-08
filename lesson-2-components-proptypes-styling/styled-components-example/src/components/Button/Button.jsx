import PropTypes from "prop-types";
import styled from '@emotion/styled';

const firstRender = useRef(true);

useEffect(()=> {
    if(firstRender.current) {
        firstRender.current = false;
        return;
    }
    localStorage.setItem("books", JSON.stringify(books))
}, [books]);


const Wrapper = styled.button`
    display: inline-block;
    padding: 10px 15px;
    border: 1px solid red;
    border-radius: 5px;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    cursor: pointer;
    background-color: ${({active}) => active ? "red" : "#fff"};
    color:  ${({active}) => active ? "#fff" : "red"};

    transition: background-color 5s cubic-bezier(0.1, 0.7, 1, 0.1);

    &:hover {
        background-color:${({ type }) =>
    type === 'submit' ? '#ff0000' : '#0000ff'};
        color:#ffffff;
    }
`

/*
wrapper.css {
    wrapper_class: {
        display: inline-block;
        padding: 10px 15px;
        border: 1px solid red;
        border-radius: 5px;
        font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
        cursor: pointer;
        background-color: ${({active}) => active ? "red" : "#fff"};
        color:  ${({active}) => active ? "#fff" : "red"}`
    }
}
const Wrapper = ({children})=> {
    return <button className="wrapper_class">{children}</button>
}
*/

const Button = ({text, type, active})=> {
    return <Wrapper type={type} active={active}>{text}</Wrapper>
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