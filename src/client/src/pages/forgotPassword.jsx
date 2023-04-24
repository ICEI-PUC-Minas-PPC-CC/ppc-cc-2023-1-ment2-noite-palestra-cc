import { Footer } from "../components/footer";
import { Header } from "../components/Header";
import { Password } from "../components/password";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export function ForgotPassword(){
    return(
        <div id="login-container">
        <Header />
            <Password />
        <Footer />
        </div>
    
    )
}