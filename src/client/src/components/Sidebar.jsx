import styles from '../components/css/Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
           
            <div className={styles.profile}>
                <img className={styles.avatar} src='https://avatars.githubusercontent.com/u/43485533?v=4' /> 
                <strong>Joao Pedro</strong>
                <span>test engineer</span>
            </div>

            <footer>
                <a href='#'> Editar seu perfil </a>
            </footer>
        </aside>
    )

}