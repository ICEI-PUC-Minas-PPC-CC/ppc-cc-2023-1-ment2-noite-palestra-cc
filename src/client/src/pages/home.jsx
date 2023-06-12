
import MiniDrawer from "../components/MiniDrawer";
import Welcome from "../components/Welcome";
import Notifications from "../components/Notifications"



export function Home() {
    return (
        <div>
            
            <MiniDrawer>
                <Notifications />
                <Welcome />
            </MiniDrawer>
                
        </div>
    );
}