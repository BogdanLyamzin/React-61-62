import useLang from "../../shared/hooks/useLang";

import styles from "./LanguageSwitcher.module.css";

const LanguageSwitcher = () => {
    const {lang, toggleLang} = useLang();

    return (
        <div>
            <span onClick={toggleLang} className={lang === "ua" ? styles.currentLang : styles.lang} >UA</span>
            | 
            <span onClick={toggleLang} className={lang === "ru" ? styles.currentLang : styles.lang}>RU</span> 
        </div>
    )
}

export default LanguageSwitcher;