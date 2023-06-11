import { Header } from "../components/Header";
import { ListDonation } from "../components/ListDonations";
import { LogoDefault } from "../components/LogoDefault";
import MiniDrawer from "../components/MiniDrawer";
import { Footer } from "../components/footer";



export function Donations() {
    return (
        <div>
            <MiniDrawer>
                <ListDonation />
            </MiniDrawer>
                
        </div>
    );
}