import { BrowserRouter } from "react-router-dom"
import { Router } from "./Routes"

export function App() {
  return (
    <div>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
   
}


