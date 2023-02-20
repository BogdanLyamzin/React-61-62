import { NavLink } from "react-router-dom";

import styles from "./navbar.module.css";

import items from "./items";

const getFullName = ({isActive}) => {
    return isActive ? `${styles.link} ${styles.active}` : styles.link;
}

const Navbar = ()=> {
    const elements = items.map(({id, text, link}) => <li key={id}>
        <NavLink className={styles.link} to={link}>{text}</NavLink>
    </li>);

    return (
        <ul className={styles.menu}>
            {elements}
        </ul>
    )
}

export default Navbar;