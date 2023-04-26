import styles from "../css/Formulario.module.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Logo } from "./Logo";

export function FormForgotPassword(){
    
    return (
        <>
          <Logo />
          <div className={styles.formDiv}>
            <form>
              <h1 className={styles.titleH1}>REDEFINIR SENHA</h1>
              <TextField
                required
                id="standard-basic"
                label="Email"
                variant="standard" 
              />
              <TextField
                required
                id="standard-basic"
                label="Nova senha"
                variant="standard" 
              />
              <TextField
                required
                type="password"
                id="standard-basic"
                label="Confirmar senha"
                variant="standard"
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
              >
                REDEFINIR
              </Button>
            </form>
          </div>
        </>
    );
}