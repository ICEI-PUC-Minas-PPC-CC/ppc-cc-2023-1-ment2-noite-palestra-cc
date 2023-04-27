import {Routes, Route} from 'react-router-dom'
import {Login} from "./pages/Login"
import {ForgotPassword} from "./pages/forgotPassword"
import { Home } from './pages/home';
import { VerifyEmail } from './pages/verifyEmail';

export function Router() {
    return(
        <Routes>
                <Route path='/' element={<Login />}/>
                <Route path='/home' element={<Home />} /> 
                <Route path='/verify-email' element={<VerifyEmail />} />
                <Route path='/:id/forgot-password' element={ <ForgotPassword /> }/>
        </Routes>
    );
}