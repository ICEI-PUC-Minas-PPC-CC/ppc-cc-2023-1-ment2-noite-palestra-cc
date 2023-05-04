import { useState } from "react";
import styles from "../css/Formulario.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import PersonIcon from '@mui/icons-material/Person';
import HttpsIcon from '@mui/icons-material/Https';
import { LogoLogin } from "./LogoLogin";
import { InputAdornment } from "@mui/material";

export function Formulario({user, setUser, password, setPassword, signIn}) {
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
      <LogoLogin />
      <div className={styles.formDiv}>
        <form>
          <h1 className={styles.titleH1}>LOGIN</h1>
          <TextField
            id="standard-basic"
            label="Usuário"
            variant="standard"
            InputProps={{
              startAdornment: <InputAdornment><PersonIcon fontSize="small" /></InputAdornment>,
            }}
            sx={estilo} value={user} onChange={(v) => setUser(v.target.value)}
          />
          <TextField
            type="password"
            id="standard-basic"
            label="Senha"
            variant="standard"
            InputProps={{
              startAdornment: <InputAdornment><HttpsIcon fontSize="small"/></InputAdornment>,
            }}
            sx={{ ...estilo }}
            value={password} onChange={(v) => setPassword(v.target.value)}
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
          <a className={styles.forgotPassword} href="/verify-email">
            Esqueceu sua senha?
          </a>
        </form>
      </div>
    </>
  );
}
