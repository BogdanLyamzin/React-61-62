import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import NavbarAuth from "./NavbarAuth/NavbarAuth";
import NavbarUser from "./NavbarUser/NavbarUser";

import styles from "./navbar.module.css";

import { isUserLogin } from "../../redux/auth/auth-selectors";

import items from "./items";

const Navbar = () => {
    const isLogin = useSelector(isUserLogin);
    const filteredItems = !isLogin ? items.filter(item => !item.private) : items;
    const elements = filteredItems.map(({ id, text, link }) => <li key={id}>
        <NavLink className={styles.link} to={link}>{text}</NavLink>
    </li>);

    return (
        <div className={styles.navbar}>
            <NavLink to="/">Logo</NavLink>

            <ul className={styles.menu}>
                {elements}
            </ul>

            {!isLogin && <NavbarAuth />}
            {isLogin && <NavbarUser />}
        </div>

    )
}

export default Navbar;