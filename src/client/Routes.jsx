import {Routes, Route} from 'react-router-dom'
import {Login} from "./src/pages/Login"
import {ForgotPassword} from "./src/pages/forgotPassword"
import { Home } from './src/pages/home';
import { VerifyEmail } from './src/pages/verifyEmail';

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