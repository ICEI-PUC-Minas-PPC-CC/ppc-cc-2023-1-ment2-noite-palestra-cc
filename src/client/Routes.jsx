import {Routes, Route} from 'react-router-dom'
import {Login} from "./src/pages/Login"
import {ForgotPassword} from "./src/pages/forgotPassword"
import { Home } from './src/pages/home';

export function Router() {
    return(
        <Routes>
                <Route path='/' element={<Login />}/>
                <Route path='/home' element={<Home />} /> 
                <Route path='/forgot-password' element={ <ForgotPassword /> }/>
        </Routes>
    );
}