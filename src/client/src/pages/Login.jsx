import { Footer } from "../components/footer";
import { Header } from "../components/Header";
import { Formulario } from "../components/formulario";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";
import styles from '../css/Formulario.module.css'
import Rotas from "../api";
import { HeaderDefault } from "../components/HeaderDefault";

export function Login() {
  const routes = new Rotas()
  const navigation = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);

  const signIn = () => {
    const data = { username: user, password: password };
    routes.post('users/login', data)
      .then((response) => {
        const data = response.data;
        if (data.message === "Usuário autenticado!") {
          navigation("/");
        } else {
          setLoginError("Usuário ou senha inválidos!");
        }
      })
      .catch((error) => {
        console.error(error);
        setLoginError("Ocorreu um erro ao efetuar login!");
      });
  }
  

  return (
    <div id="login-container">
      <HeaderDefault />
      {loginError && (
          <div className={styles.alertContainer}>
          <Alert severity="error">{loginError}</Alert>
        </div>
      )}
      <Formulario
        user={user}
        password={password}
        setUser={setUser}
        setPassword={setPassword}
        signIn={signIn}
      />
      <Footer />
    </div>
  );
}
