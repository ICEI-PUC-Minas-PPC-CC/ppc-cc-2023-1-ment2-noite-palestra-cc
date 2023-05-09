
import { HeaderDefault } from "../components/HeaderDefault";
import { Footer } from "../components/footer";
import { ListUsers } from "../components/listUsers";
import SubHeader from "../components/subHeader";
import styles from "../css/user.module.css"

export function Users() {
    return (
        <div className={styles.MainContent}>
            <HeaderDefault />
            <SubHeader />
            <h1> teste</h1>
            <ListUsers />
            <Footer />
        </div>
    )
}