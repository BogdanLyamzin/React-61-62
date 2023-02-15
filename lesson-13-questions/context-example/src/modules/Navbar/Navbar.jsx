import LanguageSwitcher from "../LanguageSwitcher"ж

import styles from "./Navbar.module.css";


const Navbar = ()=> {
    return (
        <nav className={styles.navbar}>
            <a href="#">Logo</a>
            <div>Головне меню</div>
            <LanguageSwitcher />
        </nav>
    )
}

export default Navbar;