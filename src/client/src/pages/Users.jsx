
import { HeaderDefault } from "../components/HeaderDefault";
import MiniDrawer from "../components/MiniDrawer";
{/*import { MiniDrawer } from "../components/MiniDrawer";*/}
import { Footer } from "../components/footer";
import { ListUsers } from "../components/listUsers";
import SubHeader from "../components/subHeader";
import styles from "../css/user.module.css"

export function Users() {
    return (
        <div className={styles.MainContent}>
            <MiniDrawer>
            <ListUsers />
            </MiniDrawer>
        </div>
    )
}