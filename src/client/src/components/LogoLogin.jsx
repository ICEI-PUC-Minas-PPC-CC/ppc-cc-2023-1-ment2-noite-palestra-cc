import styles from '../css/Logo.module.css'
import logo from "../assets/logo.svg"

export function LogoLogin() {
    return (
        <img className={styles.logo} src={logo} />
    );
}