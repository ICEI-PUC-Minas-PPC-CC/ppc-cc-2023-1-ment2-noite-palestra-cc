import { Footer } from "../components/footer";
import { Header } from "../components/Header";
import { Formulario } from "../components/formulario";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";
import styles from '../css/Formulario.module.css'

export function Login() {
  const navigation = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);

  const signIn = () => {
    fetch("http://localhost:8080/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: user, password: password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Usuário autenticado!") {
          navigation("/home");
        } else {
          setLoginError("Usuário ou senha inválidos!");
        }
      })
      .catch((error) => {
        console.error(error);
        setLoginError("Ocorreu um erro ao efetuar login!");
      });
  };

  return (
    <div id="login-container">
      <Header />
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
