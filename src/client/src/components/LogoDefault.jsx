import logo from "../assets/logo.svg"
import styles from '../css/LogoDefault.module.css'

export function LogoDefault() {
    return (
        <div className={styles.container}>
            <img src={logo} className={styles.logo} />
        </div>
    );
}