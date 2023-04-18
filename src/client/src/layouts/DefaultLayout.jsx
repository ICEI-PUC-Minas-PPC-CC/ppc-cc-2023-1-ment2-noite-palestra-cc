import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/footer";


export function DefaultLayout(){
    <div>
        <Header />
            <Outlet />
        <Footer />
    </div>
}