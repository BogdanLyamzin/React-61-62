import LanguageSwitcher from "../LanguageSwitcher";

import useLang from "../../shared/hooks/useLang";

import locale from "./locale.json";

import styles from "./Navbar.module.css";

const Navbar = ()=> {
    const {lang} = useLang();

    const mainMenuName = locale.menu[lang];

    return (
        <nav className={styles.navbar}>
            <a href="#">Logo</a>
            <div>{mainMenuName}</div>
            <LanguageSwitcher />
        </nav>
    )
}

export default Navbar;