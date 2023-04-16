import {Routes, Route} from 'react-router-dom'
import {Login} from "./src/pages/Login"
import {ForgotPassword} from "./src/pages/forgotPassword"
import { DefaultLayout } from './src/layouts/DefaultLayout';

export function Router() {
    return(
        <Routes>
                <Route path='/' element={<Login />}/>
                <Route path='/forgot-password' element={ <ForgotPassword /> }/>
        </Routes>
    );
}