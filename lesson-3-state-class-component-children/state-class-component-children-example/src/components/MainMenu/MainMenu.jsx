import { Component } from "react";
import PropTypes from "prop-types";

import styles from "./main-menu.module.scss";

class MainMenu extends Component {
    static defaultProps = {
        items: []
    }

    state = {
        activeIndex: 0,
    }

    handleClick(idx) {
        this.setState({activeIndex: idx})
    }

    render(){
        const {items} = this.props;
        const {activeIndex} = this.state;

        const elements = items.map(({id, text, link}, index) => <li key={id}>
                    <a onClick={()=> this.handleClick(index)} className={activeIndex === index ? `${styles.link} ${styles.active}` : styles.link} href={link}>{text}</a>
                </li>);

        return (
            <ul className={styles.menu}>
               {elements}
            </ul>
        )
    }
}

export default MainMenu;

MainMenu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
    }))
}

