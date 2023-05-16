import {Routes, Route} from 'react-router-dom'
import {Login} from "../pages/Login"
import {ForgotPassword} from "../pages/forgotPassword"
import { Home } from '../pages/home';
import { VerifyEmail } from '../pages/VerifyEmail';
import { Users } from '../pages/Users';

export function AuthRoutes() {
    return(
        <Routes>
                <Route path='/' element={<Login />}/>
                <Route path='/verify-email' element={<VerifyEmail />} />
                <Route path='/:id/forgot-password' element={ <ForgotPassword /> }/>
        </Routes>
    );
}