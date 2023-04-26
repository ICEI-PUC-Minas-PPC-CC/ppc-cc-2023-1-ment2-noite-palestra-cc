import { Header } from "../components/Header";
import { Footer } from "../components/footer";
import { FormForgotPassword } from "../components/formForgotPassword";

export function ForgotPassword(){
    return(
    <div>
      <Header />
        <FormForgotPassword />
      <Footer />
    </div>
    );
}