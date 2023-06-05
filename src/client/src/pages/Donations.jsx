import { HeaderDefault } from "../components/HeaderDefault";
import { ListDonation } from "../components/ListDonations";
import { Footer } from "../components/footer";
import SubHeader from "../components/subHeader";

export function Donations() {
    return(
        <div>
            <HeaderDefault />
            <SubHeader />
                <ListDonation />
        </div>
    );
}