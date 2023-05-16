import {Routes, Route} from 'react-router-dom'
import {Login} from "../pages/Login"
import {ForgotPassword} from "../pages/forgotPassword"
import { Home } from '../pages/home';
import { VerifyEmail } from '../pages/VerifyEmail';
import { Users } from '../pages/Users';

export function AppRoutes() {
    return(
        <Routes>
                <Route path='/' element={<Home />} /> 
                <Route path='/users' element={ <Users />} />
        </Routes>
    );
}