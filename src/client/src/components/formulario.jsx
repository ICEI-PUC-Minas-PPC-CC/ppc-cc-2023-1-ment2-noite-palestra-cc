import { useState } from "react";
import styles from "../css/Formulario.module.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo } from "./Logo";
import { InputAdornment } from "@mui/material";



export function Formulario({ user, setUser, password, setPassword, signIn }) {
  const estilo = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    outline: "none",
    border: "none",
    fontSize: "1rem",
    marginBottom: "20px",
  };

  return (
    <>
      <FontAwesomeIcon icon="fa-regular fa-user" />
      <Logo />
      <div className={styles.formDiv}>
        <form>
          <h1 className={styles.titleH1}>LOGIN</h1>
          <TextField
              label='Usuário'
              variant='standard'
              sx={{ ...estilo }}
              onChange={(v) => setUser(v.target.value)}
              value={user}
            />
          <TextField
            required
            type="password"
            id="standard-basic"
            label="Senha"
            variant="standard"
            sx={{ ...estilo }}
            value={password}
            onChange={(v) => setPassword(v.target.value)}
          />
          <Button
            sx={{
              border: "none",
              height: "40px",
              width: "200px",
              borderRadius: "20px",
              marginTop: "30px",
              color: "#fff",
              backgroundColor: "#EB268F",
              cursor: "pointer",
            }}
            variant="contained"
            onClick={signIn}
          >
            {" "}
            Entrar{" "}
          </Button>
          <a className={styles.forgotPassword} href="/forgot-password">
            Esqueceu sua senha?
          </a>
        </form>
      </div>
    </>
  );
}
