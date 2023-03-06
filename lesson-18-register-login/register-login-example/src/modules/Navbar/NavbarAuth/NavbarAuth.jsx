import { NavLink } from "react-router-dom";

import styles from "./navbar-auth.module.scss";

const NavbarAuth = () => {
    return (<div>
                <NavLink to="/register" className={styles.link}>Register</NavLink> | 
                <NavLink to="/login" className={styles.link}>Login</NavLink>
            </div>)
}

export default NavbarAuth;