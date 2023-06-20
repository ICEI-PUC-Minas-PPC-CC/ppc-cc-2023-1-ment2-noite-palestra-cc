import { BrowserRouter } from "react-router-dom"
import { Router } from "./Routes"
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

export function App() {
  return (
    <div>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
    </div>
  );
   
}


