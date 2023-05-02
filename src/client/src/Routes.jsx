import {Routes, Route} from 'react-router-dom'
import {Login} from "./pages/Login"
import {ForgotPassword} from "./pages/forgotPassword"
import { Home } from './pages/home';
import { VerifyEmail } from './pages/VerifyEmail';
import { Users } from './pages/Users';

export function Router() {
    return(
        <Routes>
                <Route path='/' element={<Login />}/>
                <Route path='/home' element={<Home />} /> 
                <Route path='/verify-email' element={<VerifyEmail />} />
                <Route path='/:id/forgot-password' element={ <ForgotPassword /> }/>
                <Route path='/users' element={ <Users />} />
        </Routes>
    );
}