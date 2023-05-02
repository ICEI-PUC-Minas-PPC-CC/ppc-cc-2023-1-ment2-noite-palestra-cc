import styles from "../css/Formulario.module.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { LogoLogin } from "./LogoLogin";


export function FormForgotPassword({password, setPassword, verifyPassword, setVerifyPassword, signIn}){
    
    return (
        <>
          <LogoLogin />
          <div className={styles.formDiv}>
            <form>
              <h1 className={styles.titleH1}>REDEFINIR SENHA</h1>
              <TextField
                required
                type="password"
                id="standard-basic"
                label="Nova senha"
                variant="standard"
                value={password} onChange={(v) => setPassword(v.target.value)}
              />
              <TextField
                required
                type="password"
                id="standard-basic"
                label="Confirmar senha"
                variant="standard"
                value={verifyPassword} onChange={(v) => setVerifyPassword(v.target.value)}
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
                REDEFINIR
              </Button>
            </form>
          </div>
        </>
    );
}