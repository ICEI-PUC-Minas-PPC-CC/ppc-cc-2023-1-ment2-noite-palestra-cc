import { Footer } from "../components/footer";
import { Header } from "../components/Header";
import { Formulario } from "../components/formulario";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigation = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    fetch("http://localhost:4000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: user, password: password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message == "Usuário autenticado!") {
          navigation("/home");
        }
        else {
          alert("Usuário ou senha inválidos!")
        }
      })

      .catch((error) => console.error(error));
  };

  return (
    <div id="login-container">
      <Header />
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
