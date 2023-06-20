import { Configuration } from "../components/Config";
import { Header } from "../components/Header";
import { ListBeneficiary } from "../components/ListBeneficiary";
import { LogoDefault } from "../components/LogoDefault";
import MiniDrawer from "../components/MiniDrawer";
import { Footer } from "../components/footer";



export function Config() {
    return (
        <div>
            <MiniDrawer>
                <Configuration />
            </MiniDrawer>
                
        </div>
    );
}