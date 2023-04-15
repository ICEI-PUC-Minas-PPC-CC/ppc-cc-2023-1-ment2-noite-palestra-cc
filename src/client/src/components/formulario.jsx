import styles from '../components/css/Formulario.module.css'
import { Logo } from './Logo';



export function Formulario() {
    return (
        
        <>
            <Logo />
            <div className={styles.formDiv}>
                <form>
                    <h1 className={styles.titleH1}>LOGIN</h1>
                    {/* <hr className={styles.line} /> */}
                    <label className={styles.user}>Usuário</label>
                    <input className={styles.email} type="email" name="email" id="email" placeholder="Digite seu e-mail" autocomplete="off" />
                    <label className={styles.userPassword}>Senha</label>
                    <input className={styles.password} type="password" name="password" id="pasword" placeholder="Digite a sua senha" />
                    <input className={styles.login} type="submit" value="Entrar"></input>
                    <a className={styles.forgotPassword} href='#' >Esqueceu sua senha?</a>
                </form>
            </div>
        </>
        
    );
}