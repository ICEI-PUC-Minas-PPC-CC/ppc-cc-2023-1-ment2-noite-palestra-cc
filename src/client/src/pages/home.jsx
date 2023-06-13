import homeStyles from "../css/Home.module.css";
import Welcome from "../components/Welcome";
import Notifications from "../components/Notifications";

export function Home() {
  return (
    <div className={homeStyles.home}>
      <Welcome />
      <Notifications />
    </div>
  );
}
