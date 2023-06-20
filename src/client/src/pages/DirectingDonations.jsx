import { Header } from "../components/Header";
import { ListDirectingDonation } from "../components/ListDirectDonation";
import { ListDonation } from "../components/ListDonations";
import { LogoDefault } from "../components/LogoDefault";
import MiniDrawer from "../components/MiniDrawer";
import { Footer } from "../components/footer";



export function DirectingDonation() {
    return (
        <div>
            <MiniDrawer>
                <ListDirectingDonation />
            </MiniDrawer>
                
        </div>
    );
}