import { Header } from "../components/Header";
import { Footer } from "../components/footer";
import { useState } from "react";
import { useNavigate, useParams  } from 'react-router-dom'
import { FormForgotPassword } from "../components/formForgotPassword";

export function ForgotPassword(){
  const { id } = useParams();
  const changePasswordUrl = `https://api-gaapo-i2ddno6wla-uw.a.run.app/users/${id}/change-password`;
  const navigation = useNavigate();
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");

  const changePassword = () => {
    return fetch(changePasswordUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password: password, verifyPassword: verifyPassword })
    })
    .then((response) => {
      if (response.status === 200) {
        navigation('/')
      } else if (response.status === 401){
        alert("As senhas não conferem")
      }
    });
  }
  
  return(
    <div>
      <Header />
        <FormForgotPassword
        password={password}
        setPassword={setPassword}
        verifyPassword={verifyPassword}
        setVerifyPassword={setVerifyPassword}
        signIn={changePassword}
        />
      <Footer />
    </div>
    );
}