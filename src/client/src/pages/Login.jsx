import { Footer } from "../components/footer";
import { Header } from "../components/Header";
import { Formulario } from "../components/formulario";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";
import styles from '../css/Formulario.module.css'
import Rotas from "../services/api";
import AuthContext from "../context/context";

export function Login() {
  const routes = new Rotas()
  const navigation = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const authContext = useContext(AuthContext)
  const [loginError, setLoginError] = useState(null);

  const signIn = () => {
    authContext.signIn(user, password)
    // routes.post('users/login', data)
    //   .then((response) => {
    //     const data = response.data;
    //     if (data.message === "Usuário autenticado!") {
    //       return data;
    //     } else {
    //       setLoginError("Usuário ou senha inválidos!");
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     setLoginError("Ocorreu um erro ao efetuar login!");
    //   });
  }
  

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
