import {Routes, Route} from 'react-router-dom'
import {Login} from "./pages/Login"
import {ForgotPassword} from "./pages/forgotPassword"
import { Home } from './pages/home';
import { VerifyEmail } from './pages/VerifyEmail';
import { Users } from './pages/Users';
import { Donations } from './pages/donations';
import { Beneficiarios } from './pages/beneficiarios';
import { Equipamentos } from './pages/equipamentos';
import { Voluntarios } from './pages/voluntarios';

export function Router() {
    return(
        <Routes>
                <Route path='/login' element={<Login />}/>
                <Route path='/' element={<Home />} /> 
                <Route path='/verify-email' element={<VerifyEmail />} />
                <Route path='/:id/forgot-password' element={ <ForgotPassword /> }/>
                <Route path='/users' element={ <Users />} />
                <Route path='/donations' element={<Donations />}/>
                <Route path='/beneficiarios' element={<Beneficiarios />}/>
                <Route path='/equipamentos' element={<Equipamentos />}/>
                <Route path='/voluntarios' element={<Voluntarios />}/>
        </Routes>
    );
}