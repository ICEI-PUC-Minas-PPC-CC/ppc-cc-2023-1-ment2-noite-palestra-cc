import { Header } from "../components/Header";
import { Footer } from "../components/footer";
import { ListUsers } from "../components/listUsers";

export function Users() {
    return (
        <div>
            <Header />
            <ListUsers />
            <Footer />
        </div>
    )
}