import styles from "../css/Formulario.module.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { LogoLogin } from "./LogoLogin";


export function FormVerifyEmail({email, setEmail, signIn}){
    
    return (
        <>
          <LogoLogin />
          <div className={styles.formDiv}>
            <form>
              <h1 className={styles.titleH1}>VERICAR EMAIL</h1>
              <TextField
                required
                id="standard-basic"
                label="Email"
                variant="standard" 
                value={email} onChange={(v) => setEmail(v.target.value)}
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
                VALIDAR
              </Button>
            </form>
          </div>
        </>
    );
}