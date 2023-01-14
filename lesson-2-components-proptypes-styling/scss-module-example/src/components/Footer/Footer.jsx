import styles from "./footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>Footer text</p>
            <button className={styles.btn}>To top</button>
        </footer>
    )
}

export default Footer;