import { ListDonators } from "../components/ListDonators";
import MiniDrawer from "../components/MiniDrawer";




export function Donators() {
    return (
        <div>
            <MiniDrawer>
                <ListDonators />
            </MiniDrawer>
        </div>
    );
}