import styles from '../components/css/Logo.module.css'
import logo from "../assets/logo.png"

export function Logo() {
    return (
        <img className={styles.logo} src={logo} />
    );
}