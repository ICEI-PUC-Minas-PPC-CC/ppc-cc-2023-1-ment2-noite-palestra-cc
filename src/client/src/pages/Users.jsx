
import { HeaderDefault } from "../components/HeaderDefault";
import { Footer } from "../components/footer";
import { ListUsers } from "../components/listUsers";
import SubHeader from "../components/subHeader";

export function Users() {
    return (
        <div>
            <HeaderDefault />
            <SubHeader />
            <ListUsers />
            <Footer />
        </div>
    )
}