import styles from '../css/Logo.module.css'
import logo from "../assets/logo.svg"

export function Logo() {
    return (
        <img className={styles.logo} src={logo} />
    );
}