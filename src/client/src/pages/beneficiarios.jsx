import { Header } from "../components/Header";
import { ListBeneficiary } from "../components/ListBeneficiary";
import { LogoDefault } from "../components/LogoDefault";
import MiniDrawer from "../components/MiniDrawer";
import { Footer } from "../components/footer";



export function Beneficiarios() {
    return (
        <div>
            <MiniDrawer>
                <ListBeneficiary />
            </MiniDrawer>
                
        </div>
    );
}