import styles from './css/App.module.css'
import { BrowserRouter } from "react-router-dom"
import  Router  from "./routes/Routes"
import { AuthProvider } from './context/context';

export function App() {
  return (
    <div>
      <AuthProvider >
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AuthProvider >
    </div>
  );
   
}


