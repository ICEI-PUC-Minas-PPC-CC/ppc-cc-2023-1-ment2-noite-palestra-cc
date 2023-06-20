import { Header } from "../components/Header";
import { Footer } from "../components/footer";
import { useState } from "react";
import { useNavigate  } from 'react-router-dom'
import { FormVerifyEmail } from "../components/formVerifyEmail";
import { HeaderDefault } from "../components/HeaderDefault";


export function VerifyEmail() {
    const navigation = useNavigate();
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [erro, setErro] = useState("");

    const signInEmail = () => {
        fetch('https://api-gaapo-i2ddno6wla-uw.a.run.app/users/verify-email', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email}),
          })
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    alert("Email não consta na base de dados!")
                }
            })
            .then((data) => {
                setId(data.message);
                navigation(`/${data.message}/forgot-password`);

            })
            .catch((error) => {
                setErro(error.message);
            });
    };

return (
    <div>
        <HeaderDefault />
        <FormVerifyEmail
            email={email}
            setEmail={setEmail}
            signIn={signInEmail}
        />
        <Footer />
    </div>
);
}