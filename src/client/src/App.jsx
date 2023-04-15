import "./global.css"
import styles from './App.module.css'
import { Footer } from "./components/footer"
import { Header } from './components/Header'
import { Formulario } from "./components/formulario"

export function App() {
  return (

      <div id="login-container">
        <Header />
        <Formulario />
        <Footer />
      </div>
      
  )
   
}


