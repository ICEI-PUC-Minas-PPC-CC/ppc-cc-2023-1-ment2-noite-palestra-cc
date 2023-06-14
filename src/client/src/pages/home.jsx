import homeStyles from "../css/Welcome.module.css";
import Welcome from "../components/Welcome";
import Notifications from "../components/Notifications";
import MiniDrawer from "../components/MiniDrawer";

export function Home() {
  return (
    <MiniDrawer>
      <div className={homeStyles.home}>
        <Welcome />
        <Notifications />
      </div>
    </MiniDrawer>
  );
}
