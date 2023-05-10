import { Header } from "../components/Header";
import { LogoDefault } from "../components/LogoDefault";
import { Menu } from "../components/Menu";
import { Footer } from "../components/footer";



export function Home() {
    return (
        <Menu>
            <Header />
            <LogoDefault />
            <h1>Home</h1>
            <Footer />
        </Menu>
    );
}